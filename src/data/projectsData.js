import projectKenzieHub from "../assets/imgs/projects/projectKenzieHub.png";
import projectNuKenzie from "../assets/imgs/projects/projectNuKenzie.png";
import projectFoodApp from "../assets/imgs/projects/projectFoodAppLP.png";

export const projectsData = [
    {
        id: 1,
        name: "FoodApp Landing-Page",
        description: `Landing Page com o objetivo de práticar programação com React. 
        Criada a partir de um protótipo fornecido pelo Figma.`,
        stacks: [
            "ReactJS",
            "CSS",
        ],
        hiperlink: "https://food-app-landing-page-xi.vercel.app/",
        repository: "https://github.com/m-ruhtra/food-app-landing-page",
        img: projectFoodApp,
        altImg: `Imagem do Projeto FoodApp Landing-Page`,
    },
    {
        id: 2,
        name: "KenzieHub",
        description: `Aplicação com foco na implementação de features de cadastro e login. 
        Na dashboard o usuário pode cadastrar, editar e excluir tecnologias que possui 
        conhecimentos. A aplicação possui UI replicado por arquivo no Figma e faz 
        utilização da API: Kenzie Hub API.`,
        stacks: [
            "ReactJS",
            "SASS",
            "React Hook Fomr",
            "Zod",
            "CRUD",    
        ],
        hiperlink: "https://kenzie-hub-six-virid.vercel.app/",
        repository: "https://github.com/Kenzie-Academy-Brasil-Developers/kenzie-hub_m-ruhtra",
        img: projectKenzieHub,
        altImg: `Imagem do Projeto KenzieHub`,
    },
    {
        id: 3,
        name: "NuKenzie",
        description: `Aplicação para gerenciamento de gastos, sendo possível o cadastramento 
        e exclusão de entradas e saídas de valores, assim como a visualização do saldo total.`,
        stacks: [
            "ReactJS",
            "SASS"    
        ],
        hiperlink: "https://nukenzie-mruhtra.vercel.app/",
        repository: "https://github.com/Kenzie-Academy-Brasil-Developers/nu-kenzie_m-ruhtra",
        img: projectNuKenzie,
        altImg: `Imagem do Projeto NuKenzie`,
    },
];
