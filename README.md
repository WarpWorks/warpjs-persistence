# WarpWorks - WarpJS Persistence

Abstract class to implement.

## API

### .close(forceClose)

### .databases

Getter to list all databases available.

### .collections

Getter to list all collections available.

### .documents(collectionName, [query, [convertId]])

Retrieves documents given the `query` from the collection `collectionName`. If
`convertId` is `true`.

### .findOne(collectionName, [query, [convertId]])

Retrieve the document.

### save(collectionName, doc)

Creates a new document in the collection `collectionName`.

### update(collectionName, doc)

Updates the document `doc` in the collection `collectionName`.

### .aggregate(collectionName, collectionJoinKey, foreignCollection, foreignKey, aggregationOutputName, matchQuery)

To document.

### .makeBackup(outputFolder)

Create a backup of the database and put the output in `outputFolder`. Returns a
promise.
