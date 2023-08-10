import indexRouter from "@/modulos/daybook/router/index";

describe("Pruebas en el router modules del DayBook", () => {
  it("el router debe tener esta configuracion", async () => {
    expect(indexRouter).toMatchObject({
      name: "daybook",
      component: expect.any(Function),
      children: [
        {
          path: "",
          name: "no-entry",
          component: expect.any(Function),
        },
        {
          path: ":id",
          name: "entry",
          component: expect.any(Function),
          props: expect.any(Function),
        },
      ],
    });

    const promiseRoutes = [];
    indexRouter.children.forEach((child) =>
      promiseRoutes.push(child.component())
    );

    const route = (await Promise.all(promiseRoutes)).map((r) => r.default.name);
    expect(route[0]).toBe("NoEntrySelected");
    expect(route[1]).toBe("EntryView");
  });

  it("debe retornar el id de la ruta", () => {
    const id = "ABC123";
    const route = {
      params: {
        id,
      },
    };
    const entryRoute = indexRouter.children.find(
      (route) => route.name === "entry"
    );
    expect(entryRoute.props(route).id).toBe(id);
  });
});
