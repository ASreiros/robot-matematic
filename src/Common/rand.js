export default function rand(min, max) {
        min = Math.ceil(Number(min));
        max = Math.floor(Number(max));
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
