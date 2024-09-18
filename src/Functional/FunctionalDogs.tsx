import { DogCard } from "../Shared/DogCard";
import { Dog  } from "../types";


// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogs = ({
  dogs,
  deleteDog,
  updateDog,
  isLoading,
}: {
  dogs: Dog[];
  deleteDog: (dog: Dog) => Promise<void>;
  updateDog: (dog: Dog, isFavorite: boolean) => Promise<void>;
  isLoading: boolean;
}) => {

  return (
    <>
    {dogs.map((dog) => {
      return (
        <DogCard
          dog={dog}
          key={dog.id}
          onTrashIconClick={() => {
            deleteDog(dog).catch((error: Error) => error.message);
          }}
          onEmptyHeartClick={() => {
            updateDog(dog, true).catch((error: Error) => error.message);
          }}
          onHeartClick={() => {
            updateDog(dog, false).catch((error: Error) => error.message);
          }}
          isLoading={isLoading}
        />
      );
    })}
    
     
    </>
  );
    }













     {/* <DogCard
        dog={{
          id: 1,
          image: dogPictures.BlueHeeler,
          description: "Example Description",
          isFavorite: false,
          name: "Cute Blue Heeler",
        }}
        key={1}
        onTrashIconClick={() => {
          alert("clicked trash");
        }}
        onHeartClick={() => {
          alert("clicked heart");
        }}
        onEmptyHeartClick={() => {
          alert("clicked empty heart");
        }}
        isLoading={false}
      />
      <DogCard
        dog={{
          id: 2,
          image: dogPictures.Boxer,
          description: "Example Description",
          isFavorite: false,
          name: "Cute Boxer",
        }}
        key={2}
        onTrashIconClick={() => {
          alert("clicked trash");
        }}
        onHeartClick={() => {
          alert("clicked heart");
        }}
        onEmptyHeartClick={() => {
          alert("clicked empty heart");
        }}
        isLoading={false}
      />
      <DogCard
        dog={{
          id: 3,
          image: dogPictures.Chihuahua,
          description: "Example Description",
          isFavorite: false,
          name: "Cute Chihuahua",
        }}
        key={3}
        onTrashIconClick={() => {
          alert("clicked trash");
        }}
        onHeartClick={() => {
          alert("clicked heart");
        }}
        onEmptyHeartClick={() => {
          alert("clicked empty heart");
        }}
        isLoading={false}
      />
      <DogCard
        dog={{
          id: 4,
          image: dogPictures.Corgi,
          description: "Example Description",
          isFavorite: false,
          name: "Cute Corgi",
        }}
        key={4}
        onTrashIconClick={() => {
          alert("clicked trash");
        }}
        onHeartClick={() => {
          alert("clicked heart");
        }}
        onEmptyHeartClick={() => {
          alert("clicked empty heart");
        }}
        isLoading={false}
      /> */}
