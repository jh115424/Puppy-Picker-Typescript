import { DogCard } from "../Shared/DogCard";
import { Component } from "react";
import { Dog } from "../types";



type ClassDogProps = {
  dogs: Dog[];
  deleteDog: (dog: Dog) => Promise<void | Dog[]>;
  updateDog: (dog: Dog, isFavorite: boolean) => Promise<void | Dog[]>;
  isLoading: boolean;
};


  export class ClassDogs extends Component<ClassDogProps> {
    render() {
      const { dogs, deleteDog, updateDog, isLoading } = this.props;
      return (
        <>
          {dogs.map((dog: Dog) => {
            return (
              <DogCard
                dog={dog}
                key={dog.id}
                onTrashIconClick={() => deleteDog(dog)}
                onHeartClick={() => updateDog(dog, true)}
                onEmptyHeartClick={() => updateDog(dog, false)}
                isLoading={isLoading}
              />
            );
          })}
        </>
      );
    }  }
