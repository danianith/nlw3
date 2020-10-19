const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    /*// inserir dados na tabela. Se estiver dentro de array colocar .toString(), ao final da última chave
    await saveOrphanage(db, {
        lat: "-29.8418863",
        lng: "-51.1363815",
        name: "Casa-Lar Abrigo Meu Refúgio",
        about: "Presta acolhimento institucional de crianças e adolecentes em situação de vulnerabilidade social. Construção de um futuro melhor com apoio e amor.",
        whatsapp: "",
        images: [
            "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg",
            "https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg",
            "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg",
            "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg",
            "https://images.pexels.com/photos/1212805/pexels-photo-1212805.jpeg",
            "https://images.pexels.com/photos/1919030/pexels-photo-1919030.jpeg"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 8h até 18h ",
        open_on_weekends: "0",
    })

    //Primeiro modo de inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-29.8191791",
            "-51.1403251",
            "ACAPASS",
            "A Associação Casa de Passagem de Sapucaia do Sul - ACAPASS é uma organização não governamental (ONG) de caráter filantrópico que acolhe crianças de 0 à 16 anos de forma provisória. Estas crianças passam a viver no abrigo a partir de uma medida protetiva de acolhimento institucional, devido ao abandono ou a casos em que as famílias encontram-se impossibilitadas de cumprir sua função de cuidado e proteção, conforme rege o Estatuto da Criança e Adolescente – ECA (ECA, Art. 101).",           
            "(51) 3451-2871",
            "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas: Das 8h até 18h ",
            "1"
        );
    `)

    // consultar todos os dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orfanato da tabela pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    // Deletar dado da tabela por id
    await db.run("DELETE FROM orphanages WHERE id='4'")*/
})