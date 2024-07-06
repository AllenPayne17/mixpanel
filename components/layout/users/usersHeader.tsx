'use client'

/**
 * Renders the header component for the Users section.
 */
const usersHeader = () => {

    return(
    <>
    <div className="flex flex-row ">
        <h1 className="text-2xl font-medium">Users</h1>
    </div>
    
    <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
            <p>0</p>
            <p>Users</p>
        </div>
        <div className="flex gap-4">
            <button className="btn-primary">Add User</button>
            <button className="btn-secondary">Import Users</button>
            <button className="btn-secondary">Export Users</button>
        </div>
    </div>
    </>
    )   
}

export default usersHeader