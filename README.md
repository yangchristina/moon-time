# moon-time-ts

Converted [@moon-time](https://github.com/Liu-Jinshuai/moon-time.git) to TS

moon-time is a component that converts the solar calendar to the lunar calendar (Chinese lunar calendar), it is very simple to use。

### Install

```javascript
    npm install moon-time-ts
```

```javascript
    let moonTimes = moonTime({
        year,
        month,
        day
    })
```

### npm way

```javascript
    import moonTime from 'moon-time-ts'

    let moonTimes = moonTime({
	 year:2022,
	 month:10,
	 day:13
    })

    console.log(moonTimes);
```
