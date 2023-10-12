import { ressourceData } from '../src/data.js';

// create an array with all the categories
const categoryNames = [
    ...new Set(ressourceData.map((ressource) => ressource.category)),
];

// loop that add the ressources for each category
for (let i = 0; i < categoryNames.length; i++) {
    const ressourceFilter = ressourceData.filter(
        (ressource) => ressource.category == categoryNames[i]
    );

    const ressourceNames = ressourceFilter
        .map((ressource) => {
            const categoryId = `collapse__info--${ressource.name.replace(
                /[ .]/g,
                '-'
            )}`;
            return `
        <li class="my-2">
            <div
                class="d-flex align-items-center"
            >
                <div
                    class="ressource__icon rounded-circle me-2"
                >
                    <img
                        class="rounded-circle"
                        src="https://besticon-demo.herokuapp.com/icon?url=${ressource.link}&size=32..50..120"
                        alt="${ressource.name} icon"
                    />
                </div>
                <div
                class="d-flex flex-fill justify-content-between"
            >
                <div
                    class="d-flex ressource__details me-2"
                >
                    <h4 class="fs-5 fw-bold m-0 align-self-center">
                        ${ressource.name}
                    </h4>
                </div>
                <div
                    class="buttons d-flex flex-NO-wrap align-items-center"
                >
                    <button
                        class="btn btn-primary me-2 text-primary bg-white text-uppercase fs-6"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-label="info"
                        data-bs-target="#${categoryId}"
                        aria-expanded="false"
                        aria-controls="collapse__info"
                    >
                    <i class="bi bi-info-circle"></i>
                    </button>
                    <a
                    target='_blank'
                        href="${ressource.link}"
                        class="btn btn-primary ressource__button"
                        >OPEN</a
                    >
                </div>
            </div>
            </div>
            <div
                class="collapse mt-2 p-2"
                id=${categoryId}
            > ${ressource.description}
            </div>
    </li>`;
        })
        .join(' ');

    // add to the DOM
    document.querySelector(`#card${i + 1}__ul`).innerHTML = ressourceNames;
}
