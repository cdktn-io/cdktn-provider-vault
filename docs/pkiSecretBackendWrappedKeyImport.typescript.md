# `pkiSecretBackendWrappedKeyImport` Submodule <a name="`pkiSecretBackendWrappedKeyImport` Submodule" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendWrappedKeyImport <a name="PkiSecretBackendWrappedKeyImport" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import vault_pki_secret_backend_wrapped_key_import}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer"></a>

```typescript
import { pkiSecretBackendWrappedKeyImport } from '@cdktn/provider-vault'

new pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport(scope: Construct, id: string, config: PkiSecretBackendWrappedKeyImportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig">PkiSecretBackendWrappedKeyImportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig">PkiSecretBackendWrappedKeyImportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetKeyName` <a name="resetKeyName" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiSecretBackendWrappedKeyImport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct"></a>

```typescript
import { pkiSecretBackendWrappedKeyImport } from '@cdktn/provider-vault'

pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement"></a>

```typescript
import { pkiSecretBackendWrappedKeyImport } from '@cdktn/provider-vault'

pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource"></a>

```typescript
import { pkiSecretBackendWrappedKeyImport } from '@cdktn/provider-vault'

pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendWrappedKeyImport } from '@cdktn/provider-vault'

pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PkiSecretBackendWrappedKeyImport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendWrappedKeyImport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendWrappedKeyImport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendWrappedKeyImport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmacInput">exportKeyHmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKeyInput">wrappedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmac">exportKeyHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKey">wrappedKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `exportKeyHmacInput`<sup>Optional</sup> <a name="exportKeyHmacInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmacInput"></a>

```typescript
public readonly exportKeyHmacInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `wrappedKeyInput`<sup>Optional</sup> <a name="wrappedKeyInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKeyInput"></a>

```typescript
public readonly wrappedKeyInput: string;
```

- *Type:* string

---

##### ~~`exportKeyHmac`~~<sup>Required</sup> <a name="exportKeyHmac" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmac"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly exportKeyHmac: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### ~~`wrappedKey`~~<sup>Required</sup> <a name="wrappedKey" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKey"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly wrappedKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendWrappedKeyImportConfig <a name="PkiSecretBackendWrappedKeyImportConfig" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.Initializer"></a>

```typescript
import { pkiSecretBackendWrappedKeyImport } from '@cdktn/provider-vault'

const pkiSecretBackendWrappedKeyImportConfig: pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.exportKeyHmac">exportKeyHmac</a></code> | <code>string</code> | HMAC fingerprint of the wrapping key used to encrypt the blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.mount">mount</a></code> | <code>string</code> | Path of the destination PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.wrappedKey">wrappedKey</a></code> | <code>string</code> | Base64-encoded wrapped CA private key blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.keyName">keyName</a></code> | <code>string</code> | Human-readable name for the imported key in Vault. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `exportKeyHmac`<sup>Required</sup> <a name="exportKeyHmac" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.exportKeyHmac"></a>

```typescript
public readonly exportKeyHmac: string;
```

- *Type:* string

HMAC fingerprint of the wrapping key used to encrypt the blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#export_key_hmac PkiSecretBackendWrappedKeyImport#export_key_hmac}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path of the destination PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#mount PkiSecretBackendWrappedKeyImport#mount}

---

##### `wrappedKey`<sup>Required</sup> <a name="wrappedKey" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.wrappedKey"></a>

```typescript
public readonly wrappedKey: string;
```

- *Type:* string

Base64-encoded wrapped CA private key blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#wrapped_key PkiSecretBackendWrappedKeyImport#wrapped_key}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Human-readable name for the imported key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#key_name PkiSecretBackendWrappedKeyImport#key_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#namespace PkiSecretBackendWrappedKeyImport#namespace}

---



