import { DogCard } from "../Shared/DogCard";
import { Component } from "react";
import { Dog } from "../types";


type ClassDogsProps = {
  dogs: Dog[];
  onTrashIconClick: (dog: Dog) => void;
  onHeartClick: (dog: Dog) => void;
  onEmptyHeartClick: (dog: Dog) => void;
  isLoading: boolean;
  
};export class ClassDogs extends Component<ClassDogsProps> {
  render() {
    const { dogs, onTrashIconClick, onHeartClick, onEmptyHeartClick, isLoading } = this.props;
    return (
      <>
      {dogs.map((dog) => (
       <DogCard
       dog={dog}
       key={dog.id}
       onTrashIconClick={() => onTrashIconClick(dog)}
       onHeartClick={() => onHeartClick(dog)}
       onEmptyHeartClick={() => onEmptyHeartClick(dog)}
       isLoading={isLoading}/>
      ))}
      </>
    );
  }
}
