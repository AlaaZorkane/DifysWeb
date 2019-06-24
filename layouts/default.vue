<template>
    <v-app dark class="app">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 988.809 409.73"
            class="path1"
        >
            <path
                id="Path_1"
                data-name="Path 1"
                d="M0,288.561c110.52-49.752,100.57,142.149,215.71,69.653S330.851,125.091,514.222,143.57,828.685,97.387,878.437,71.8,994.684-31.273,987.576-34.116"
                transform="translate(0.205 34.58)"
                fill="none"
                stroke="#707070"
                stroke-width="1"
            />
        </svg>
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style>
.app {
    background-color: #151515 !important;
}
.path1 {
    width: calc(10rem + 40vw);
    position: absolute;
}
.application {
    font-family: "Oxygen", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;
}
</style>
