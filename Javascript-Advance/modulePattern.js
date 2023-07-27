/*  
    *The module pattern is a design pattern used for improving the maintainability and reusability of the code by creating public and private access levels. Sometimes called encapsulation, it protects the value inside a module from being accessed from other scopes.

    *The module pattern keeps the privacy of the state and organizes using closures. It protects the pieces from the global scope, avoiding possible errors and conflicts.
*/

{
    const createSupplier = (function () {
        const name = "General Motors";
        const field = "automobile";


        const getSupplierName = () => name;


        return {
            name,
            field,
            getName: () => getSupplierName(),
        };
    })();
}

{
    const createSupplier = (function () {
        // Private
        const name = "General Motors";
        const field = "automobile";
        const getSupplierName = () => name;
        const getSupplierField = () => field;


        // Public
        return {
            name,
            field,
            getName: () => getSupplierName(),
            getField: () => getSupplierField(),
        };
    })();


    createSupplier.name;
    createSupplier.field;
    createSupplier.getName();
}