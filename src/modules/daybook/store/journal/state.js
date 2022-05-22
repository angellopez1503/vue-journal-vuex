export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Ea adipisicing aute ad laborum tempor culpa mollit ipsum sit. Reprehenderit proident nisi id labore veniam irure qui id labore ea culpa ex laboris. Exercitation ullamco dolor consectetur quis occaecat aliqua.',
            picture: null
        
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'Et occaecat sunt exercitation consectetur in. Ea laboris laborum velit magna cillum ullamco occaecat quis magna veniam pariatur incididunt laboris. Est do consequat officia nostrud et enim pariatur sunt velit. Ex sint ea et minim.',
            picture: null

        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Magna reprehenderit et anim esse sit nostrud est fugiat id aliquip. Cillum pariatur culpa velit aute eiusmod fugiat ad duis nisi cupidatat occaecat amet. Duis quis mollit nostrud qui labore veniam mollit occaecat sit sunt. Laboris enim nisi ea eu Lorem proident et eiusmod irure voluptate laboris enim sint sit.',
            picture: null

        }
    ]
})