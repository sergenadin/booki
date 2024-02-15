function trouverAdolescent(personnes) {
    for (const nom in personnes) {
        const age = personnes[nom];

        if (age >= 13 && age <= 19) {
            return nom;
        }
    }

    return null; // Retourner null si aucun adolescent n'est trouvé
}