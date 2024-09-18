// you can use this type for react children if you so choose
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ActiveComponent } from "../types";




export const FunctionalSection = ({
  children,
  determineActiveComponent,
  activeComponent,
  favoritedDogsCount,
  unfavoritedDogsCount,
}: {
  children: ReactNode;
  determineActiveComponent: (component: ActiveComponent) => void;
  activeComponent: ActiveComponent;
  favoritedDogsCount: number;
  unfavoritedDogsCount: number;
}) => {
  const makeClassName = (
    activeComponent: ActiveComponent,
    currentComponent: ActiveComponent
  ) => {
    return activeComponent === currentComponent ? "active" : "";
  };
  const favoriteClassName = makeClassName(activeComponent, "favorited");
  const unfavoriteClassName = makeClassName(activeComponent, "unfavorited");
  const makeDogFormClassName = makeClassName(activeComponent, "create-dog-form");

  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">Dogs: </div>
        <Link to={"/class"} className="btn">
          Change to Class
        </Link>
        <div className="selectors">
          <div
            className={`selector ${favoriteClassName}`}
            onClick={() => determineActiveComponent("favorited")}
          >
            favorited ( {favoritedDogsCount} )
          </div>
          <div
            className={`selector ${unfavoriteClassName}`}
            onClick={() => determineActiveComponent("unfavorited")}
          >
            unfavorited ( {unfavoritedDogsCount} )
          </div>
          <div
            className={`selector ${makeDogFormClassName}`}
            onClick={() => determineActiveComponent("create-dog-form")}
          >
            create dog
          </div>
        </div>
      </div>
      <div className="content-container">{children}</div>
    </section>
  );
}