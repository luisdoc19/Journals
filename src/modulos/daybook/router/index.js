export default {
  name: "daybook",
  component: () => import("@/modulos/daybook/layout/DaybookLayout.vue"),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () => import("@/modulos/daybook/views/NoEntrySelected.vue"),
    },
    {
      path: ":id",
      name: "entry",
      component: () => import("@/modulos/daybook/views/EntryView.vue"),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
  ],
};
