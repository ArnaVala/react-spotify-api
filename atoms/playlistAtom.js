import { atom } from "recoil";

// creating an Atom for the playlistId = every Atom needs to have a special key
export const playlistState = atom({
  key: "playlistState",
  default: null,
});

export const playlistIdState = atom({
  key: "playlistIdState",
  default: "37i9dQZF1DWXLeA8Omikj7",
});