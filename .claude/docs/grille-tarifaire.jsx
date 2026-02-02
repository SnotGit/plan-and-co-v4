import React from 'react';

export default function GrilleTarifaire() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">📊 Grille Tarifaire Plan & Co v4</h1>

        {/* Tableau Principal */}
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
          <table className="w-full text-white">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-lg font-semibold">Formule</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Prix Total</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Mensualité</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Durée crédit</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Bénéfice Site</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Bénéfice Héberg</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700 hover:bg-gray-750">
                <td className="px-6 py-5 text-lg font-medium text-blue-400">Landing Page</td>
                <td className="px-6 py-5 text-lg">1 200€</td>
                <td className="px-6 py-5 text-lg">100€</td>
                <td className="px-6 py-5 text-lg">12 mois</td>
                <td className="px-6 py-5 text-lg text-green-400 font-semibold">1 200€</td>
                <td className="px-6 py-5 text-lg">0€</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-gray-750">
                <td className="px-6 py-5 text-lg font-medium text-cyan-400">Site PRO</td>
                <td className="px-6 py-5 text-lg">3 600€</td>
                <td className="px-6 py-5 text-lg">150€</td>
                <td className="px-6 py-5 text-lg">24 mois</td>
                <td className="px-6 py-5 text-lg text-green-400 font-semibold">3 000€</td>
                <td className="px-6 py-5 text-lg text-green-400 font-semibold">398€</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-gray-750">
                <td className="px-6 py-5 text-lg font-medium text-green-400">Site PRO+</td>
                <td className="px-6 py-5 text-lg">4 800€</td>
                <td className="px-6 py-5 text-lg">200€</td>
                <td className="px-6 py-5 text-lg">24 mois</td>
                <td className="px-6 py-5 text-lg text-green-400 font-semibold">4 200€</td>
                <td className="px-6 py-5 text-lg text-green-400 font-semibold">398€</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* NOUVELLE GRILLE : Détail Coûts Hébergements Mensuel */}
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-4 bg-purple-700">
            <h2 className="text-2xl font-bold text-white">💰 Détail Coûts Hébergements Mensuel</h2>
          </div>
          <table className="w-full text-white">
            <thead className="bg-gray-700 border-t border-gray-600">
              <tr>
                <th className="px-6 py-4 text-left text-lg font-semibold">Formule</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Coût réel/mois</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Prix revente/mois</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Marge/mois</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Coût 2 ans</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Revente 2 ans</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Marge 2 ans</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700 hover:bg-gray-750">
                <td className="px-6 py-5 text-lg font-medium text-blue-400">Landing Page</td>
                <td className="px-6 py-5 text-lg">0€</td>
                <td className="px-6 py-5 text-lg">0€</td>
                <td className="px-6 py-5 text-lg">0€</td>
                <td className="px-6 py-5 text-lg">0€</td>
                <td className="px-6 py-5 text-lg">0€</td>
                <td className="px-6 py-5 text-lg">0€</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-gray-750">
                <td className="px-6 py-5 text-lg font-medium text-cyan-400">Site PRO</td>
                <td className="px-6 py-5 text-lg">8,42€</td>
                <td className="px-6 py-5 text-lg">25€</td>
                <td className="px-6 py-5 text-lg text-green-400 font-semibold">16,58€</td>
                <td className="px-6 py-5 text-lg">202€</td>
                <td className="px-6 py-5 text-lg">600€</td>
                <td className="px-6 py-5 text-lg text-green-400 font-semibold">398€</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-gray-750">
                <td className="px-6 py-5 text-lg font-medium text-green-400">Site PRO+</td>
                <td className="px-6 py-5 text-lg">8,42€</td>
                <td className="px-6 py-5 text-lg">25€</td>
                <td className="px-6 py-5 text-lg text-green-400 font-semibold">16,58€</td>
                <td className="px-6 py-5 text-lg">202€</td>
                <td className="px-6 py-5 text-lg">600€</td>
                <td className="px-6 py-5 text-lg text-green-400 font-semibold">398€</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Détail Hébergement Annuel */}
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-4 bg-gray-700">
            <h2 className="text-2xl font-bold text-white">Détail Coûts Hébergement Annuel</h2>
          </div>
          <table className="w-full text-white">
            <thead className="bg-gray-700 border-t border-gray-600">
              <tr>
                <th className="px-6 py-4 text-left text-lg font-semibold">Formule</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Coût réel/an</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Prix revente/an</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Marge/an</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700 hover:bg-gray-750">
                <td className="px-6 py-5 text-lg font-medium text-blue-400">Landing Page</td>
                <td className="px-6 py-5 text-lg">0€ (Firebase gratuit)</td>
                <td className="px-6 py-5 text-lg">0€</td>
                <td className="px-6 py-5 text-lg">0€</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-gray-750">
                <td className="px-6 py-5 text-lg font-medium text-cyan-400">Site PRO</td>
                <td className="px-6 py-5 text-lg">101€ (VPS 86€ + domaine 15€)</td>
                <td className="px-6 py-5 text-lg">300€</td>
                <td className="px-6 py-5 text-lg text-green-400 font-semibold">199€</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-gray-750">
                <td className="px-6 py-5 text-lg font-medium text-green-400">Site PRO+</td>
                <td className="px-6 py-5 text-lg">101€ (VPS 86€ + domaine 15€)</td>
                <td className="px-6 py-5 text-lg">300€</td>
                <td className="px-6 py-5 text-lg text-green-400 font-semibold">199€</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Détail Hébergement 10 ans */}
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-4 bg-gray-700">
            <h2 className="text-2xl font-bold text-white">Bénéfices Hébergement sur 10 ans</h2>
          </div>
          <table className="w-full text-white">
            <thead className="bg-gray-700 border-t border-gray-600">
              <tr>
                <th className="px-6 py-4 text-left text-lg font-semibold">Formule</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Coût réel 10 ans</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Prix revente 10 ans</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Marge 10 ans</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700 hover:bg-gray-750">
                <td className="px-6 py-5 text-lg font-medium text-blue-400">Landing Page</td>
                <td className="px-6 py-5 text-lg">0€</td>
                <td className="px-6 py-5 text-lg">0€</td>
                <td className="px-6 py-5 text-lg">0€</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-gray-750">
                <td className="px-6 py-5 text-lg font-medium text-cyan-400">Site PRO</td>
                <td className="px-6 py-5 text-lg">1 010€ (101€ × 10 ans)</td>
                <td className="px-6 py-5 text-lg">3 000€ (300€ × 10 ans)</td>
                <td className="px-6 py-5 text-lg text-green-400 font-bold text-xl">1 990€</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-gray-750">
                <td className="px-6 py-5 text-lg font-medium text-green-400">Site PRO+</td>
                <td className="px-6 py-5 text-lg">1 010€ (101€ × 10 ans)</td>
                <td className="px-6 py-5 text-lg">3 000€ (300€ × 10 ans)</td>
                <td className="px-6 py-5 text-lg text-green-400 font-bold text-xl">1 990€</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="bg-blue-900 border-l-4 border-blue-500 p-6 rounded">
          <h3 className="text-xl font-bold text-white mb-3">📌 Notes importantes</h3>
          <ul className="text-blue-100 space-y-2 text-lg">
            <li>
              • Années 1-2 : Hébergement 600€ inclus dans le crédit (300€/an × 2) -
              Maintenance/modifications incluses
            </li>
            <li>
              • Année 3+ : Hébergement 300€/an (cash ou mensuel 25€/mois) -
              Maintenance/modifications facturées
            </li>
            <li>• VPS-2 OVH : 7,14€/mois = 86€/an</li>
            <li>• Domaine : 15€/an</li>
            <li>• Total coûts réels hébergement : 101€/an (8,42€/mois)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
