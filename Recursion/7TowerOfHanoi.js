var n = 3;

function TOH(n, src, dest, help) {
  if (n === 0) {
    return;
  }

  TOH(n - 1, src, help, dest);
  console.log(`Move disk ${n} from ${src} to ${dest}`);
  TOH(n - 1, help, dest, src);
}

TOH(n, 1, 2, 3);
