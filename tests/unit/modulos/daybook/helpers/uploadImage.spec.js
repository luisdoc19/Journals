jest.setTimeout(15000);
import cloudinary from "cloudinary";
import uploadImage from "@/modulos/daybook/helpers/uploadImage";
import axios from "axios";

cloudinary.config({
  cloud_name: "djrggifvj",
  api_key: "629787776568666",
  api_secret: "vLxMdlBewlL1ZfQvQQrc1cooSxo",
});

describe("uploadImage.js", () => {
  test("debe cargar un archivo y retornar el url", async () => {
    const { data } = await axios.get(
      "https://res.cloudinary.com/djrggifvj/image/upload/v1691284441/kztoiusfvzxeibohpovt.png",
      {
        responseType: "arraybuffer",
      }
    );

    const file = new File([data], "foto.png");
    const url = await uploadImage(file);

    expect(typeof url).toBe("string");

    const segment = url.split("/");
    const id = segment[segment.length - 1].replace(".png", "");
    cloudinary.v2.api.delete_resources(id);
  });
});
