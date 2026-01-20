## Przechodzenie przez drzewa (Tree Traversal)

Przechodzenie przez drzewa (Tree Traversal) to proces odwiedzania każdego węzła w drzewie dokładnie jeden raz. W przeciwieństwie do tablic czy list, które są liniowe (iterujesz od początku do końca), drzewa można "zwiedzać" na wiele sposobów.

Dzielimy je na dwie główne kategorie: **DFS** (w głąb) i **BFS** (wszerz).

Załóżmy, że mamy takie proste drzewo binarne do przykładów:

```text
      1
     / \
    2   3
   / \
  4   5
```

---

### 1. DFS (Depth-First Search) – Przeszukiwanie w głąb

W tych metodach idziemy "do dna" jednej gałęzi, zanim przejdziemy do kolejnej. Implementuje się je zazwyczaj **rekurencyjnie** (wykorzystując stos wywołań) lub iteracyjnie przy użyciu **Stosu (Stack)**.

Nazwy metod (Pre, In, Post) mówią nam, **kiedy odwiedzamy Rodzica (Root)** względem jego dzieci.

#### A. Pre-Order (NLR: Node -> Left -> Right)
"Najpierw Ja, potem dzieci".
1. Odwiedź węzeł (zapisz wartość / wyświetl).
2. Idź do lewego dziecka.
3. Idź do prawego dziecka.

*   **Kolejność dla przykładu:** `1 -> 2 -> 4 -> 5 -> 3`
*   **Zastosowanie:**
    *   Kopiowanie drzewa (musisz stworzyć rodzica, zanim przypiszesz mu dzieci).
    *   Serializacja drzewa (zapisywanie struktury do pliku/stringa).

#### B. In-Order (LNR: Left -> Node -> Right)
"Najpierw lewe, potem Ja, potem prawe".
1. Idź do lewego dziecka.
2. Odwiedź węzeł.
3. Idź do prawego dziecka.

*   **Kolejność dla przykładu:** `4 -> 2 -> 5 -> 1 -> 3`
*   **Zastosowanie (Bardzo ważne!):**
    *   W przypadku **Drzew Przeszukiwań Binarnych (BST)**, ta metoda zwraca wartości **posortowane rosnąco**. To najczęstsze zastosowanie tej metody.

#### C. Post-Order (LRN: Left -> Right -> Node)
"Najpierw dzieci, na końcu Ja".
1. Idź do lewego dziecka.
2. Idź do prawego dziecka.
3. Odwiedź węzeł.

*   **Kolejność dla przykładu:** `4 -> 5 -> 2 -> 3 -> 1`
*   **Zastosowanie:**
    *   Usuwanie drzewa (bezpieczniej jest usunąć dzieci, zanim usuniesz rodzica, żeby nie stracić referencji).
    *   Obliczanie wyrażeń matematycznych zapisanych w drzewie (system odwrotnej notacji polskiej).

---

### 2. BFS (Breadth-First Search) – Przeszukiwanie wszerz

Tutaj nie idziemy na dno, ale zwiedzamy drzewo **poziomami** (warstwami). Do implementacji **niezbędna jest Kolejka (Queue)** (taka, jaką zaimplementowałeś na początku).

#### Level-Order
Odwiedzamy węzły poziom po poziomie, od lewej do prawej.

1. Poziom 0: Węzeł 1.
2. Poziom 1: Węzły 2, 3.
3. Poziom 2: Węzły 4, 5.

*   **Kolejność dla przykładu:** `1 -> 2 -> 3 -> 4 -> 5`
*   **Algorytm:**
    1. Wrzuć `root` do kolejki.
    2. Dopóki kolejka nie jest pusta:
       a. Wyjmij (`dequeue`) węzeł i go odwiedź.
       b. Jeśli ma lewe dziecko -> wrzuć do kolejki (`enqueue`).
       c. Jeśli ma prawe dziecko -> wrzuć do kolejki (`enqueue`).
*   **Zastosowanie:**
    *   Szukanie najkrótszej ścieżki w grafach/drzewach nieważonych.
    *   Wypisywanie struktury drzewa w sposób wizualny (poziomami).

### Podsumowanie w tabeli

| Metoda | Typ | Kolejność (N=Node, L=Left, R=Right) | Do czego używamy? | Struktura pomocnicza |
| :--- | :--- | :--- | :--- | :--- |
| **Pre-Order** | DFS | **N** -> L -> R | Kopiowanie drzew, serializacja | Stos / Rekurencja |
| **In-Order** | DFS | L -> **N** -> R | Pobieranie posortowanych danych z BST | Stos / Rekurencja |
| **Post-Order** | DFS | L -> R -> **N** | Usuwanie drzewa (od dołu), systemy plików | Stos / Rekurencja |
| **Level-Order** | BFS | Poziomami (góra -> dół) | Najkrótsza ścieżka, analiza warstwowa | **Kolejka (Queue)** |