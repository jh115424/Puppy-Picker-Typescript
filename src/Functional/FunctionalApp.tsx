import { FunctionalSection } from "./FunctionalSection";
import { useEffect, useState } from "react";
import { ActiveComponent, Dog } from "../types";
import { FunctionalDogs } from "./FunctionalDogs";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { Requests } from "../api";
import toast from "react-hot-toast";
// import MyDogComponent from "./MyDogComponent";





export function FunctionalApp() {
  const [allDogs, setAllDogs] = useState<Dog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeComponent, setActiveComponent] =
    useState<ActiveComponent>("all");

  const refetchDogData = () => {
    return Requests.getAllDogs().then(setAllDogs);
  };

  useEffect(() => {
    refetchDogData().catch(() => {
      throw new Error("Unable to fetch data");
    });
  }, []);

  const postDog = (dog: Omit<Dog, "id">) => {
    setIsLoading(true);
    Requests.postDog(dog)
    .then(refetchDogData)
    .then(() => {
        toast.success(`Created ${dog.name}`);
      })
      .catch(() => {
        toast.error(`Unable to create ${dog.name}`);
      })
      .finally(() => setIsLoading(false));

  };

  const deleteDog = async (dog: Dog) => {
    setIsLoading(true);
    try {
      await Requests.deleteDog(dog.id);
      await refetchDogData();
      toast.success(`Deleted ${dog.name}`);
    } catch {
      toast.error(`Unable to delete ${dog.name}`);
    } finally {
      setIsLoading(false);
    }
  };

  const updateDog = async (dog: Dog, isFavorite: boolean) => {
    setIsLoading(true);
    try {
      await Requests.updateDog(dog.id, isFavorite);
      await refetchDogData();
      toast.success(`${isFavorite ? "Favorited" : "Unfavorited"} ${dog.name}`);
    } catch {
      toast.error(
        `Unable to ${isFavorite ? "favorite" : "unfavorite"} ${dog.name}`
      );
    } finally {
      setIsLoading(false);
    }
  };
  const determineActiveComponent = (component: ActiveComponent) => {
    if (component === activeComponent) {
      setActiveComponent("all");
    } else {
      setActiveComponent(component);
    }
  };

  const shouldShowForm = activeComponent === "create-dog-form";

  const favoritedDogs = Object.values(allDogs).filter(
    (dog) => dog.isFavorite === true
  );
  const unfavoritedDogs = Object.values(allDogs).filter(
    (dog) => dog.isFavorite === false
  );



  const determineDogArray = (): Dog[] => {
    switch (activeComponent) {
      case "all":
        return allDogs;
      case "favorited":
        return favoritedDogs;
      case "unfavorited":
        return unfavoritedDogs;
      case "create-dog-form":
        return [];
    }
  };
  const dogArray = determineDogArray();

  return (
    <div className="App" style={{ backgroundColor: "skyblue" }}>
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <FunctionalSection 
        determineActiveComponent={determineActiveComponent}
        activeComponent={activeComponent}
        favoritedDogsCount={favoritedDogs.length}
        unfavoritedDogsCount={unfavoritedDogs.length}
      >
        {shouldShowForm ? (
          <FunctionalCreateDogForm postDog={postDog} isLoading={isLoading} />
        ) : (
          <FunctionalDogs
            dogs={dogArray}
            deleteDog={deleteDog}
            updateDog={updateDog}
            isLoading={isLoading}
          />
        )}
      </FunctionalSection>
    </div>
  );
};