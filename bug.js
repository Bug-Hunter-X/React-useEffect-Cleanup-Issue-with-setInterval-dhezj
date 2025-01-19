```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: the return value should cancel the effect
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return intervalId; // This is wrong. It doesn't cancel the interval.
  }, []);

  return <div>Count: {count}</div>;
}
```