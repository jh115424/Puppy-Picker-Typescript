import { Component } from "react";
import { ClassSection } from "./ClassSection";
import { ActiveComponent, Dog } from "../types";
import { Requests } from "../api";
import { ClassCreateDogForm } from "./ClassCreateDogForm";
import { ClassDogs } from "./ClassDogs";
import toast from "react-hot-toast";
export interface ClassSectionProps {
  determineActiveComponent: (component: ActiveComponent) => void;
  activeComponent: ActiveComponent;
  favoritedDogsCount: number;
  unfavoritedCount: number;
  children: React.ReactNode;
}
export interface ClassCreateDogFormProps {
  onFormSubmit: () => void;
  postDog: (dog: Omit<Dog, "id">) => void;
  isLoading: boolean;
}
export interface ClassDogsProps {
  dogs: Dog[];
  onDelete: (dog: Dog) => void;
  deleteDog: (dog: Dog) => void;

  updateDog: (dog: Dog, isFavorite: boolean) => void;
  isLoading: boolean;
  postDog: (dog: Dog) => void;
}

type ClassAppState = {
  allDogs: any;
  dogs: Dog[];
  postDog: (dog: Omit<Dog, "id">) => void;
  activeComponent: ActiveComponent;
  isLoading: boolean;
};

export class ClassApp extends Component<Record<string, never>, ClassAppState> {
  state: ClassAppState = {
    dogs: [],
    activeComponent: "favorited",
    isLoading: false,
    allDogs: undefined,
    postDog: function (dog: Omit<Dog, "id">): void {
      console.log(dog);
      throw new Error("Function not implemented.");
    },
  };
  refetchDogData = () => {
    this.setState({ isLoading: true });
    Requests.getAllDogs().then((dogs) => {
      this.setState({ dogs, isLoading: false });
    });
  };
  componentDidMount(): void {
    this.refetchDogData();
  }

  postDog = (dog: Omit<Dog, "id">) => {
    this.setState({ isLoading: true });
    Requests.postDog(dog)
      .then(this.refetchDogData)
      .then(() => {
        toast.success(`${dog.name} was created!`);
      })
      .catch(() => {
        toast.error(`Unable to create ${dog.name}!`);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  deleteDog = (dog: Dog) => {
    this.setState({ isLoading: true });
    Requests.deleteDog(dog)
      .then(this.refetchDogData)
      .then(() => {
        toast.success(`${dog.name} was deleted!`);
      })
      .catch(() => {
        toast.error(`Unable to delete ${dog.name}!`);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  updateDog = (dog: Dog, isFavorite: boolean) => {
    this.setState({ isLoading: true });
    Requests.updateDog(dog, isFavorite)
      .then(this.refetchDogData)
      .then(() => {
        toast.success(`${dog.name} was updated!`);
      })
      .catch(() => {
        toast.error(`Unable to update ${dog.name}!`);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  determineActiveComponent = (component: ActiveComponent) => {
    if (component === this.state.activeComponent) {
      this.setState({ activeComponent: "all" });
    } else {
      this.setState({ activeComponent: component });
    }
  };
  createDog: any;
  render() {
    const shouldShowForm = this.state.activeComponent === "create-dog-form";
    const favoritedDogs = this.state.dogs.filter(
      (dog: { isFavorite: boolean }) => dog.isFavorite === true
    );
    const unfavoritedDogs = this.state.dogs.filter(
      (dog: { isFavorite: boolean }) => dog.isFavorite === false
    );

    const determineDogArray = (): Dog[] => {
      switch (this.state.activeComponent) {
        case "all":
          return this.state.dogs;
        case "favorited":
          return favoritedDogs;
        case "unfavorited":
          return unfavoritedDogs;
        case "create-dog-form":
        default:
          return [];
      }
    };

    const dogArray = determineDogArray();

    return (
      <div className="App" style={{ backgroundColor: "goldenrod" }}>
        <header>
          <h1>pup-e-picker (Class Version)</h1>
        </header>
        <ClassSection
          determineActiveComponent={this.determineActiveComponent}
          activeComponent={this.state.activeComponent}
          favoritedDogsCount={favoritedDogs.length}
          unfavoritedDogsCount={unfavoritedDogs.length}
        >
          {shouldShowForm ? (
            <ClassCreateDogForm
              postDog={this.postDog}
              isLoading={this.state.isLoading}
            />
          ) : (
            <ClassDogs
              dogs={dogArray}
              onDelete={this.deleteDog}
              deleteDog={this.deleteDog}
              updateDog={this.updateDog}
              isLoading={this.state.isLoading}
            />
          )}
        </ClassSection>
      </div>
    );
  }
}
