class IDHelperClass {
    #table = {}

    /**
     * @param id :string - check uniqueness of component id 
     * @returns true on success, false on fail
     * please throw error when fail
     */
    register(id) {
        if (!id || this.#table[id]) return false;
        this.#table[id] = true;
        return true;
    }
}

export const IDHelper = new IDHelperClass();