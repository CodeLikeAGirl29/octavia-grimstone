import PortfolioImg from '@/public/images/portfolio-img.jpg';
import MainImage from '@/public/images/blog-img-wide.jpg';

export const portfolioData = {
    mainData: {
        title: "Battles Won, Shadows Vanquished",
        title2: "Recent",
        title2Span: "Works",
        description: "Step into the heart of the action where every project is a victory against the undead. From fortified safe havens to covert coven takeovers, these missions showcase the art, strategy, and courage it takes to keep the night safe. Whether it’s crafting vampire-proof defenses, hosting slayer workshops, or unraveling ancient lore, these highlights are proof that no fanged foe is too daunting. Take a peek—each project tells a tale of shadows conquered and legacies forged."
    },
    projects: [
        {
            title: 'Fortifying the Silverwood Cathedral',
            slug: 'silverwood-cathedral',
            description: 'Installed anti-vampire defenses in the historic Silverwood Cathedral, safeguarding its congregation from nocturnal threats.',
            services: [
                { name: 'UV light installation' },
                { name: 'Garlic misting system setup' },
                { name: 'Blessing of doorways and windows' },
            ],
            client: 'Silverwood Parish',
            projectLink: {
                title: 'www.silverwoodcathedral.org',
                url: 'https://www.silverwoodcathedral.org'
            },
            duration: '72 hours',
            content: 'This project involved evaluating vulnerabilities in the structure, creating a plan for fortification, and implementing state-of-the-art vampire deterrents.',
            mainImage: PortfolioImg,
            mainImageWide: MainImage,
            images: [
                { image: PortfolioImg },
                { image: PortfolioImg },
            ],
            categories: [
                { name: 'Fortification' },
                { name: 'Community Protection' },
            ],
        },
        {
            title: 'Covert Coven Elimination',
            slug: 'coven-elimination',
            description: 'Dismantled a vampire coven operating in the shadows of Nightshade Valley through strategic reconnaissance and direct intervention.',
            services: [
                { name: 'Reconnaissance and tracking' },
                { name: 'Stake crafting and deployment' },
                { name: 'Safe removal of vampire remains' },
            ],
            client: 'Nightshade Valley Council',
            projectLink: {
                title: 'www.nightshadevalley.gov',
                url: 'https://www.nightshadevalley.gov'
            },
            duration: '96 hours',
            content: 'Through careful planning and execution, this mission neutralized a dangerous vampire coven, restoring peace to the valley.',
            mainImage: PortfolioImg,
            mainImageWide: MainImage,
            images: [
                { image: PortfolioImg },
                { image: PortfolioImg },
            ],
            categories: [
                { name: 'Elimination' },
                { name: 'Stealth Operations' },
            ],
        },
        {
            title: 'Lore Recovery: The Crimson Codex',
            slug: 'crimson-codex',
            description: 'Recovered and translated the ancient Crimson Codex, uncovering valuable insights into vampire origins and weaknesses.',
            services: [
                { name: 'Artifact recovery' },
                { name: 'Translation of ancient texts' },
                { name: 'Publication of findings' },
            ],
            client: 'The Order of Eternal Light',
            projectLink: {
                title: 'www.eternallightorder.com',
                url: 'https://www.eternallightorder.com'
            },
            duration: '144 hours',
            content: 'The Crimson Codex provided groundbreaking knowledge on combating vampires, solidifying its place as a vital tool for vampire slayers.',
            mainImage: PortfolioImg,
            mainImageWide: MainImage,
            images: [
                { image: PortfolioImg },
                { image: PortfolioImg },
            ],
            categories: [
                { name: 'Research' },
                { name: 'Artifact Retrieval' },
            ],
        },
    ]
};