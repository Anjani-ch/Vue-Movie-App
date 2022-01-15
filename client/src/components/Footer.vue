<template>
    <footer class="footer bg-dark text-light text-center py-2 mt-5">
        <p class="mt-2">Copyright &copy; {{ year }}</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    setup() {
        const date = new Date()
        const year = date.getFullYear()

        return { year }
    }
}
</script>