import { useState } from 'react'


let nextId = 0
export default function AppList(){
	const [value,setValue] = useState('')
	const [list,setList] = useState([])

	function handleSubmit(event){
		event.preventDefault()
		setList([...list,{id:nextId++,isi:value}])
		event.target.reset()
	}

	function removeList(i){
		setList(list.filter(r => r.id != i))
		
	}


	return (
	<>
	 <form onSubmit={handleSubmit}>
	 	<input type="text" name="node" onChange={(e) => setValue(e.target.value)} placeholder="Tambah Catatan"/>
	 </form>
	 {
	 	list.map((maps) => (
	 		<li key={maps.id}>{maps.isi} || <button onClick={() => removeList(maps.id)}>Delete</button></li>
	 	))
	 }
	</>
	)
}