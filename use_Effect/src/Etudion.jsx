import { data } from "./Data";
import { useState, useEffect } from "react";

function Etudiants() {
  const [groupes, setGroupes] = useState([]);
  const [selectedGr, setSelectedGr] = useState("");
  const [etudiants, setEtudiants] = useState([]);

  useEffect(function () {
    const keys = Object.keys(data);
    setGroupes(keys);
    if (keys.length > 0) {
      setSelectedGr(keys[0]);
    }
  }, []);

  useEffect(function () {
    if (selectedGr) {
      setEtudiants(data[selectedGr] || []);
    }
  }, [selectedGr]);

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <select
        value={selectedGr}
        onChange={(e) => setSelectedGr(e.target.value)}
        className="w-full p-2 border border-slate-300 rounded-lg bg-white outline-none"
      >
        {groupes.map(function (item, i) {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </select>

      <div className="space-y-3">
        {etudiants.map(function (item, i) {
          return (
            <div key={i} className="rounded-xl bg-white p-5 shadow border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800">{item.nom}</h3>
              <p className="mt-2 text-slate-500">
                Note : <span className="font-semibold text-blue-600">{item.note} / 20</span>
              </p>
            </div>
          );
        })}
      </div>

      <label className="block text-sm text-slate-400">Groupe sélectionné : {selectedGr}</label>
    </div>
  );
}

export default Etudiants;