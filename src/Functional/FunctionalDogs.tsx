import { DogCard } from "../Shared/DogCard";
import { dogPictures } from "../dog-pictures";


// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogs = () => {



  // 1. map dogs array to an array of DogCard components
  // 2. render them in a pretty grid.
  // 3. make sure to use the dogPictures array provided for setting the correct image url
  // 4. make sure to use the isLoading boolean provided for setting the correct loading value
  // 5. make sure to use the isFavorite boolean provided for setting the correct favorite value
  // 6. make sure to use the onTrashIconClick function provided
  // 7. make sure to use the onHeartClick function provided
  // 8. make sure to use the onEmptyHeartClick function provided
  // 9. make sure to use the isLoading boolean provided
  // 10. make sure to use the isFavorite boolean provided
  // 11. make sure to use the id number provided
  
  
  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      <DogCard
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
      />
    </>
  );
};
