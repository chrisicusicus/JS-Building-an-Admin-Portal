
// Your Code Here
// get all the books
// book title, input, button
// add an event listener to our save button to make the request to update book
// fetch request

//2:45-- debug

 async function main() {
    const response = await fetch('http://localhost:3001/listbooks')
    const books = await response.json()

    books.forEach(renderBook)
 }

 function renderBook(book) {
    console.log(book)
    const root = document.getElementById('root')

    const li = document.createElement('li')
    li.textContent = book.title

    const input = document.createElement('input')
    input.value = book.quantity

    const saveButton = document.createElement('button')
    saveButton.textContent = 'Save'



    saveButton.addEventListener('click', () => {
        const body = {
            id: book.id,
            quantity: input.value
    
        }
        fetch('http://localhost:3001/updateBook',{
            method:'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    })

    li.append(input, saveButton)

    root.appendChild(li)

 }
 
 main()