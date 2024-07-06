'use client'


// layout
import UsersHeader from '../../components/layout/users/UsersHeader'
import UsersFilter from '../../components/layout/users/UsersFilter'
import UsersTable from '../../components/layout/users/UsersTable'

export default function Page() {

  return(
    <div>
      <UsersHeader/>
      <UsersFilter/>
      <UsersTable/>
    </div>
  )
}
