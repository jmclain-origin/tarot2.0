<template>
    <div class="modal" v-if="isOpen">
        <div class="modal-overlay" @click="closeModal"></div>
        <div class="modal-content">
            <!-- Modal content goes here -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('update:isOpen', false);
        }
    }
};
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
