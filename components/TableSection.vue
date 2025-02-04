<template>
    <section class="table-section d-flex align-items-center justify-content-center">
        <table>
            <thead>
                <!-- First row with 8 columns, first cell empty -->
                <tr>
                    <th></th>
                    <th>Gyakorló tesztek</th>
                    <th>Próba felvételi</th>
                    <th>Ismétlő kérdések</th>
                    <th>Hibák elemzése</th>
                    <th>Teljesítmény követése</th>
                    <th>Tanulási ajánlások</th>
                    <th>Ár</th>
                </tr>
            </thead>
            <tbody>
                <!-- Second row -->
                <tr>
                    <th>Alap Csomag</th>
                    <td><i class="bi bi-check-square-fill"></i></td>
                    <td>1 szak</td>
                    <td><i class="bi bi-x-square-fill"></i></td>
                    <td><i class="bi bi-x-square-fill"></i></td>
                    <td><i class="bi bi-x-square-fill"></i></td>
                    <td><i class="bi bi-x-square-fill"></i></td>
                    <td>9.99$</td>
                </tr>
                <!-- Third row -->
                <tr>
                    <th>Pro Csomag</th>
                    <td><i class="bi bi-check-square-fill"></i></td>
                    <td><b>Összes szak</b></td>
                    <td><i class="bi bi-check-square-fill"></i></td>
                    <td><i class="bi bi-check-square-fill"></i></td>
                    <td><i class="bi bi-check-square-fill"></i></td>
                    <td><i class="bi bi-check-square-fill"></i></td>
                    <td>14.99$</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script setup lang="ts">
// No specific script needed
</script>

<style scoped>
.bi-x-square-fill {
    color: red;
}

.bi-check-square-fill {
    color: green;
}

.table-section {
    margin-top: 50px;
    width: 100%;
    height: 400px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
}

table {
    width: 100%;
    height: 100%;
    border-collapse: separate; /* Allows cell spacing */
    border-spacing: 1.2rem;   /* Controls the distance between cells */
}

th,
td {
    background-color: transparent;
    border: none;
    text-align: center;
    vertical-align: middle;
    font-size: 1.1rem;   /* Slightly bigger font size */
    padding: 0.75rem 0.3rem;
}

@media only screen and (max-width: 830px) {
  .table-section {
    display: none !important;
  }
}
</style>