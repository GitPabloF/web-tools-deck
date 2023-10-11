import { ressourceData } from '../src/data.js';


const categoryNames = [
    ...new Set(ressourceData.map((ressource) => ressource.category)),
];

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
        <li>
            <div
                class="d-flex align-items-center"
            >
                <div
                    class="ressource__icon rounded-circle me-3"
                >
                    <img
                        class="rounded-circle"
                        src="src/img/style-img.png"
                        alt=""
                    />
                </div>
                <div
                    class="ressource__details me-3"
                >
                    <h4 class="fs-5">
                        ${ressource.name}
                    </h4>
                </div>
                <button
                    class="btn btn-primary me-2 text-primary bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#${categoryId}"
                    aria-expanded="false"
                    aria-controls="collapse__info"
                >
                    info
                </button>
                <a
                target=”_blank” href="${ressource.link}"
                    class="btn btn-primary ressource__button"
                    >view</a
                >
            </div>

            <div
                class="collapse mt-2 p-2"
                id=${categoryId}
            > ${ressource.description}
            </div>
    </li>`;
        })
        .join(' ');

    const docTest = document.querySelector(`#card${i + 1}__ul`);

    docTest.innerHTML = ressourceNames;
}
