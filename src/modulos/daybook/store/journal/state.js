export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi rerum quos veniam debitis iure quae dignissimos ex nobis aspernatur in numquam id cumque inventore sunt, necessitatibus odit delectus cupiditate maxime!",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe neque minus quam sequi. Nesciunt vero aliquid non quaerat doloremque nisi fugit aperiam velit blanditiis atque? Aut expedita repellendus labore quo?",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, est dignissimos laudantium harum, repellendus perferendis at labore, nihil maxime quo sint perspiciatis ab ullam deleniti dolorem illum asperiores voluptatem veniam.",
      picture: null,
    },
  ],
});
