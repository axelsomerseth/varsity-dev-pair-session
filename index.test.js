const getAboutUsLink = require("./index");

test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});

test("Returns about-us for portuguese language", () => {
    expect(getAboutUsLink("pt-BR")).toBe("/sobre-nos");
});