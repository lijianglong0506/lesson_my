import { onMounted, ref, onUnmounted } from 'vue'
function useMouse () {
    let x = ref(0)
    let y = ref(0)

    const update = (e:MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }

    onMounted(() => {
        window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
    })
    return {
        x,y
    }
}
export default useMouse