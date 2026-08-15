# `gcpkmsSecretBackendKey` Submodule <a name="`gcpkmsSecretBackendKey` Submodule" id="@cdktn/provider-vault.gcpkmsSecretBackendKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpkmsSecretBackendKey <a name="GcpkmsSecretBackendKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key vault_gcpkms_secret_backend_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer"></a>

```typescript
import { gcpkmsSecretBackendKey } from '@cdktn/provider-vault'

new gcpkmsSecretBackendKey.GcpkmsSecretBackendKey(scope: Construct, id: string, config: GcpkmsSecretBackendKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig">GcpkmsSecretBackendKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig">GcpkmsSecretBackendKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetCryptoKey">resetCryptoKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetProtectionLevel">resetProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetCryptoKey` <a name="resetCryptoKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetCryptoKey"></a>

```typescript
public resetCryptoKey(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetProtectionLevel` <a name="resetProtectionLevel" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetProtectionLevel"></a>

```typescript
public resetProtectionLevel(): void
```

##### `resetPurpose` <a name="resetPurpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetPurpose"></a>

```typescript
public resetPurpose(): void
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetRotationPeriod"></a>

```typescript
public resetRotationPeriod(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GcpkmsSecretBackendKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct"></a>

```typescript
import { gcpkmsSecretBackendKey } from '@cdktn/provider-vault'

gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement"></a>

```typescript
import { gcpkmsSecretBackendKey } from '@cdktn/provider-vault'

gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource"></a>

```typescript
import { gcpkmsSecretBackendKey } from '@cdktn/provider-vault'

gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport"></a>

```typescript
import { gcpkmsSecretBackendKey } from '@cdktn/provider-vault'

gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GcpkmsSecretBackendKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GcpkmsSecretBackendKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GcpkmsSecretBackendKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GcpkmsSecretBackendKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.nextRotationTimeSeconds">nextRotationTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.primaryVersion">primaryVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationScheduleSeconds">rotationScheduleSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKeyInput">cryptoKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRingInput">keyRingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevelInput">protectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purposeInput">purposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKey">cryptoKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRing">keyRing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevel">protectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriod">rotationPeriod</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `nextRotationTimeSeconds`<sup>Required</sup> <a name="nextRotationTimeSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.nextRotationTimeSeconds"></a>

```typescript
public readonly nextRotationTimeSeconds: number;
```

- *Type:* number

---

##### `primaryVersion`<sup>Required</sup> <a name="primaryVersion" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.primaryVersion"></a>

```typescript
public readonly primaryVersion: number;
```

- *Type:* number

---

##### `rotationScheduleSeconds`<sup>Required</sup> <a name="rotationScheduleSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationScheduleSeconds"></a>

```typescript
public readonly rotationScheduleSeconds: number;
```

- *Type:* number

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `cryptoKeyInput`<sup>Optional</sup> <a name="cryptoKeyInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKeyInput"></a>

```typescript
public readonly cryptoKeyInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `keyRingInput`<sup>Optional</sup> <a name="keyRingInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRingInput"></a>

```typescript
public readonly keyRingInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `protectionLevelInput`<sup>Optional</sup> <a name="protectionLevelInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevelInput"></a>

```typescript
public readonly protectionLevelInput: string;
```

- *Type:* string

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purposeInput"></a>

```typescript
public readonly purposeInput: string;
```

- *Type:* string

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriodInput"></a>

```typescript
public readonly rotationPeriodInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKey"></a>

```typescript
public readonly cryptoKey: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRing"></a>

```typescript
public readonly keyRing: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevel"></a>

```typescript
public readonly protectionLevel: string;
```

- *Type:* string

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpkmsSecretBackendKeyConfig <a name="GcpkmsSecretBackendKeyConfig" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.Initializer"></a>

```typescript
import { gcpkmsSecretBackendKey } from '@cdktn/provider-vault'

const gcpkmsSecretBackendKeyConfig: gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyName">keyName</a></code> | <code>string</code> | Name of the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyRing">keyRing</a></code> | <code>string</code> | GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.mount">mount</a></code> | <code>string</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.algorithm">algorithm</a></code> | <code>string</code> | Algorithm to use for the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.cryptoKey">cryptoKey</a></code> | <code>string</code> | Name of the crypto key to use in GCP KMS. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.protectionLevel">protectionLevel</a></code> | <code>string</code> | Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.purpose">purpose</a></code> | <code>string</code> | Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>string</code> | Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_name GcpkmsSecretBackendKey#key_name}

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyRing"></a>

```typescript
public readonly keyRing: string;
```

- *Type:* string

GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_ring GcpkmsSecretBackendKey#key_ring}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#mount GcpkmsSecretBackendKey#mount}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Algorithm to use for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#algorithm GcpkmsSecretBackendKey#algorithm}

---

##### `cryptoKey`<sup>Optional</sup> <a name="cryptoKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.cryptoKey"></a>

```typescript
public readonly cryptoKey: string;
```

- *Type:* string

Name of the crypto key to use in GCP KMS.

If the crypto key does not exist,Vault will try to create it. This defaults to the Vault key name if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#crypto_key GcpkmsSecretBackendKey#crypto_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#labels GcpkmsSecretBackendKey#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#namespace GcpkmsSecretBackendKey#namespace}

---

##### `protectionLevel`<sup>Optional</sup> <a name="protectionLevel" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.protectionLevel"></a>

```typescript
public readonly protectionLevel: string;
```

- *Type:* string

Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#protection_level GcpkmsSecretBackendKey#protection_level}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#purpose GcpkmsSecretBackendKey#purpose}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: string;
```

- *Type:* string

Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#rotation_period GcpkmsSecretBackendKey#rotation_period}

---



