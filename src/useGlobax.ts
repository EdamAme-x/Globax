export function useGlobax(InitValue, Key) {

    if (globalThis.Globax === undefined) {
        globalThis.Globax = {};
    }

    if (!globalThis.Globax.hasOwnProperty(Key)) {
        globalThis.Globax[Key] = InitValue; // init
    }

    function setGlobax(SetValue) {
        globalThis.Globax = SetValue;
    }

    let value = globalThis.Globax[Key];

    function getGlobax() {
        return value;
    }

    return [getGlobax, setGlobax];
}