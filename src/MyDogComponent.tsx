/* eslint-disable react/prop-types */
interface Dog {
  // Define the properties of the Dog interface here
  id: number;
  name: string;
  breed: string;
  isFavorite: boolean;
}

interface myDogComponentProps {
  dogs: Dog[];
  deleteDog: (dog: Dog) => Promise<void>;
  updateDog: (dog: Dog, isFavorite: boolean) => Promise<void>;
  isLoading: boolean;
}

const MyDogComponent: React.FC<myDogComponentProps> = ({ dogs, deleteDog, updateDog, isLoading }) => {
     // Your component logic here
     return (
          <div>
               {isLoading ? (
                    <p>Loading...</p>
               ) : (
                    <ul>
                         {dogs.map((dog) => (
                              <li key={dog.id}>
                                   {dog.name} - {dog.breed}
                                   <button onClick={() => deleteDog(dog)}>Delete</button>
                                   <button onClick={() => updateDog(dog, !dog.isFavorite)}>
                                        {dog.isFavorite ? 'Unfavorite' : 'Favorite'}
                                   </button>
                              </li>
                         ))}
                    </ul>
               )}
          </div>
     )
}

export default MyDogComponent

