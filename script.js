let dataMap = {};

// Charger les données depuis l'API SQL
fetch("api/produits.php")
  .then(response => response.json())
  .then(data => {
    let count = 0;
    data.forEach(row => {
      const codes = [
        row.code1?.trim(),
        row.code2?.trim(),
        row.code3?.trim()
      ];

      codes.forEach(code => {
        if (code) {
          const cleanCode = code.toUpperCase();
          dataMap[cleanCode] = {
            produit: row.produit,
            quantite: row.quantite,
            prix: row.prix
          };
          count++;
        }
      });
    });

    document.getElementById("nb-references").textContent = count;
    console.log("Références chargées :", count);
    demarrerScanner();
  });

function demarrerScanner() {
    console.log("Scanner simulation démarré.");

    document.addEventListener("keydown", function(event) {
        const code = event.key.toUpperCase();
        if (dataMap[code]) {
            const produit = dataMap[code];
            document.getElementById("resultat").textContent =
                `${code} → ${produit.produit} | Quantité: ${produit.quantite} | Prix: ${produit.prix} €`;
        } else {
            document.getElementById("resultat").textContent =
                `${code} → Produit non trouvé.`;
        }
    });
}
