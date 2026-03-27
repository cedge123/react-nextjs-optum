import SearchSuppliers from "./SearchSuppliers";
// this server component we should not write any hooks,
// it just have plain db or api logic to feath data!
export default async function SuppliersPage() {

    async function fetchSuppliers(query?: any) {
        const response = await fetch("http://localhost:3000/api/suppliers?q" + query)
        const suppliers = await response.json();
        return suppliers;
    }

    const supplier = await fetchSuppliers()

    return (
        <div>
            <h4>Suppliers Listing</h4>
            <SearchSuppliers data={supplier}/>
        </div>
    )

}