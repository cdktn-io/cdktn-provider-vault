# `transformTransformationTokenizationStore` Submodule <a name="`transformTransformationTokenizationStore` Submodule" id="@cdktn/provider-vault.transformTransformationTokenizationStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenizationStore <a name="TransformTransformationTokenizationStore" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store vault_transform_transformation_tokenization_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer"></a>

```typescript
import { transformTransformationTokenizationStore } from '@cdktn/provider-vault'

new transformTransformationTokenizationStore.TransformTransformationTokenizationStore(scope: Construct, id: string, config: TransformTransformationTokenizationStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig">TransformTransformationTokenizationStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig">TransformTransformationTokenizationStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxConnectionLifetime">resetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxIdleConnections">resetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxOpenConnections">resetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSupportedTransformations">resetSupportedTransformations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxConnectionLifetime` <a name="resetMaxConnectionLifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxConnectionLifetime"></a>

```typescript
public resetMaxConnectionLifetime(): void
```

##### `resetMaxIdleConnections` <a name="resetMaxIdleConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxIdleConnections"></a>

```typescript
public resetMaxIdleConnections(): void
```

##### `resetMaxOpenConnections` <a name="resetMaxOpenConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxOpenConnections"></a>

```typescript
public resetMaxOpenConnections(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetSupportedTransformations` <a name="resetSupportedTransformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSupportedTransformations"></a>

```typescript
public resetSupportedTransformations(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationTokenizationStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct"></a>

```typescript
import { transformTransformationTokenizationStore } from '@cdktn/provider-vault'

transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement"></a>

```typescript
import { transformTransformationTokenizationStore } from '@cdktn/provider-vault'

transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource"></a>

```typescript
import { transformTransformationTokenizationStore } from '@cdktn/provider-vault'

transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport"></a>

```typescript
import { transformTransformationTokenizationStore } from '@cdktn/provider-vault'

transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TransformTransformationTokenizationStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransformTransformationTokenizationStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransformTransformationTokenizationStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenizationStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionStringInput">connectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driverInput">driverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetimeInput">maxConnectionLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnectionsInput">maxIdleConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnectionsInput">maxOpenConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformationsInput">supportedTransformationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driver">driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformations">supportedTransformations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: string;
```

- *Type:* string

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driverInput"></a>

```typescript
public readonly driverInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxConnectionLifetimeInput`<sup>Optional</sup> <a name="maxConnectionLifetimeInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetimeInput"></a>

```typescript
public readonly maxConnectionLifetimeInput: number;
```

- *Type:* number

---

##### `maxIdleConnectionsInput`<sup>Optional</sup> <a name="maxIdleConnectionsInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnectionsInput"></a>

```typescript
public readonly maxIdleConnectionsInput: number;
```

- *Type:* number

---

##### `maxOpenConnectionsInput`<sup>Optional</sup> <a name="maxOpenConnectionsInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnectionsInput"></a>

```typescript
public readonly maxOpenConnectionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `supportedTransformationsInput`<sup>Optional</sup> <a name="supportedTransformationsInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformationsInput"></a>

```typescript
public readonly supportedTransformationsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxConnectionLifetime`<sup>Required</sup> <a name="maxConnectionLifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

---

##### `maxIdleConnections`<sup>Required</sup> <a name="maxIdleConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

---

##### `maxOpenConnections`<sup>Required</sup> <a name="maxOpenConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `supportedTransformations`<sup>Required</sup> <a name="supportedTransformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformations"></a>

```typescript
public readonly supportedTransformations: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationStoreConfig <a name="TransformTransformationTokenizationStoreConfig" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.Initializer"></a>

```typescript
import { transformTransformationTokenizationStore } from '@cdktn/provider-vault'

const transformTransformationTokenizationStoreConfig: transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connectionString">connectionString</a></code> | <code>string</code> | A database connection string with template slots for username and password that Vault will use for locating and connecting to a database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.driver">driver</a></code> | <code>string</code> | Specifies the database driver to use, and thus which SQL database type. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.name">name</a></code> | <code>string</code> | The name of the store. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.password">password</a></code> | <code>string</code> | Password value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.path">path</a></code> | <code>string</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.type">type</a></code> | <code>string</code> | Specifies the type of store, currently only "sql" is supported,. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.username">username</a></code> | <code>string</code> | Username value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxConnectionLifetime">maxConnectionLifetime</a></code> | <code>number</code> | The maximum amount of time a connection can be open before closing it. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxIdleConnections">maxIdleConnections</a></code> | <code>number</code> | The maximum number of idle connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxOpenConnections">maxOpenConnections</a></code> | <code>number</code> | The maximum number of connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.schema">schema</a></code> | <code>string</code> | The schema within the database to expect tokenization state tables. Default is "public". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.supportedTransformations">supportedTransformations</a></code> | <code>string[]</code> | The types of transformations this store can support, currently only "tokenization" is supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

A database connection string with template slots for username and password that Vault will use for locating and connecting to a database.

Each database driver type has a different syntax for its connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#connection_string TransformTransformationTokenizationStore#connection_string}

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

Specifies the database driver to use, and thus which SQL database type.

Currently the supported options are postgres, mysql, and mssql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#driver TransformTransformationTokenizationStore#driver}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#name TransformTransformationTokenizationStore#name}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#password TransformTransformationTokenizationStore#password}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#path TransformTransformationTokenizationStore#path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies the type of store, currently only "sql" is supported,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#type TransformTransformationTokenizationStore#type}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#username TransformTransformationTokenizationStore#username}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxConnectionLifetime`<sup>Optional</sup> <a name="maxConnectionLifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxConnectionLifetime"></a>

```typescript
public readonly maxConnectionLifetime: number;
```

- *Type:* number

The maximum amount of time a connection can be open before closing it.

0 means no limit. Default is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_connection_lifetime TransformTransformationTokenizationStore#max_connection_lifetime}

---

##### `maxIdleConnections`<sup>Optional</sup> <a name="maxIdleConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxIdleConnections"></a>

```typescript
public readonly maxIdleConnections: number;
```

- *Type:* number

The maximum number of idle connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_idle_connections TransformTransformationTokenizationStore#max_idle_connections}

---

##### `maxOpenConnections`<sup>Optional</sup> <a name="maxOpenConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxOpenConnections"></a>

```typescript
public readonly maxOpenConnections: number;
```

- *Type:* number

The maximum number of connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_open_connections TransformTransformationTokenizationStore#max_open_connections}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#namespace TransformTransformationTokenizationStore#namespace}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema within the database to expect tokenization state tables. Default is "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#schema TransformTransformationTokenizationStore#schema}

---

##### `supportedTransformations`<sup>Optional</sup> <a name="supportedTransformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.supportedTransformations"></a>

```typescript
public readonly supportedTransformations: string[];
```

- *Type:* string[]

The types of transformations this store can support, currently only "tokenization" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#supported_transformations TransformTransformationTokenizationStore#supported_transformations}

---



