# `keymgmtAzureKms` Submodule <a name="`keymgmtAzureKms` Submodule" id="@cdktn/provider-vault.keymgmtAzureKms"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymgmtAzureKms <a name="KeymgmtAzureKms" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_azure_kms vault_keymgmt_azure_kms}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer"></a>

```typescript
import { keymgmtAzureKms } from '@cdktn/provider-vault'

new keymgmtAzureKms.KeymgmtAzureKms(scope: Construct, id: string, config: KeymgmtAzureKmsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig">KeymgmtAzureKmsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig">KeymgmtAzureKmsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetCredentialsWo">resetCredentialsWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetCredentialsWoVersion">resetCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCredentialsWo` <a name="resetCredentialsWo" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetCredentialsWo"></a>

```typescript
public resetCredentialsWo(): void
```

##### `resetCredentialsWoVersion` <a name="resetCredentialsWoVersion" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetCredentialsWoVersion"></a>

```typescript
public resetCredentialsWoVersion(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KeymgmtAzureKms resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isConstruct"></a>

```typescript
import { keymgmtAzureKms } from '@cdktn/provider-vault'

keymgmtAzureKms.KeymgmtAzureKms.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isTerraformElement"></a>

```typescript
import { keymgmtAzureKms } from '@cdktn/provider-vault'

keymgmtAzureKms.KeymgmtAzureKms.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isTerraformResource"></a>

```typescript
import { keymgmtAzureKms } from '@cdktn/provider-vault'

keymgmtAzureKms.KeymgmtAzureKms.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.generateConfigForImport"></a>

```typescript
import { keymgmtAzureKms } from '@cdktn/provider-vault'

keymgmtAzureKms.KeymgmtAzureKms.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KeymgmtAzureKms resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeymgmtAzureKms to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeymgmtAzureKms that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_azure_kms#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KeymgmtAzureKms to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWoInput">credentialsWoInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWoVersionInput">credentialsWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.keyCollectionInput">keyCollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWo">credentialsWo</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWoVersion">credentialsWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.keyCollection">keyCollection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `credentialsWoInput`<sup>Optional</sup> <a name="credentialsWoInput" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWoInput"></a>

```typescript
public readonly credentialsWoInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `credentialsWoVersionInput`<sup>Optional</sup> <a name="credentialsWoVersionInput" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWoVersionInput"></a>

```typescript
public readonly credentialsWoVersionInput: number;
```

- *Type:* number

---

##### `keyCollectionInput`<sup>Optional</sup> <a name="keyCollectionInput" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.keyCollectionInput"></a>

```typescript
public readonly keyCollectionInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `credentialsWo`<sup>Required</sup> <a name="credentialsWo" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWo"></a>

```typescript
public readonly credentialsWo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `credentialsWoVersion`<sup>Required</sup> <a name="credentialsWoVersion" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.credentialsWoVersion"></a>

```typescript
public readonly credentialsWoVersion: number;
```

- *Type:* number

---

##### `keyCollection`<sup>Required</sup> <a name="keyCollection" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.keyCollection"></a>

```typescript
public readonly keyCollection: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKms.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeymgmtAzureKmsConfig <a name="KeymgmtAzureKmsConfig" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.Initializer"></a>

```typescript
import { keymgmtAzureKms } from '@cdktn/provider-vault'

const keymgmtAzureKmsConfig: keymgmtAzureKms.KeymgmtAzureKmsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.keyCollection">keyCollection</a></code> | <code>string</code> | Refers to the name of an existing Azure Key Vault instance. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.mount">mount</a></code> | <code>string</code> | Path of the Key Management secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the Azure Key Vault provider. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.credentialsWo">credentialsWo</a></code> | <code>{[ key: string ]: string}</code> | The credentials to use for authentication with Azure Key Vault. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.credentialsWoVersion">credentialsWoVersion</a></code> | <code>number</code> | Version counter for the write-only `credentials_wo` field. |
| <code><a href="#@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyCollection`<sup>Required</sup> <a name="keyCollection" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.keyCollection"></a>

```typescript
public readonly keyCollection: string;
```

- *Type:* string

Refers to the name of an existing Azure Key Vault instance. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_azure_kms#key_collection KeymgmtAzureKms#key_collection}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path of the Key Management secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_azure_kms#mount KeymgmtAzureKms#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the Azure Key Vault provider. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_azure_kms#name KeymgmtAzureKms#name}

---

##### `credentialsWo`<sup>Optional</sup> <a name="credentialsWo" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.credentialsWo"></a>

```typescript
public readonly credentialsWo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The credentials to use for authentication with Azure Key Vault.

Supplying values for this parameter is optional, as credentials may also be specified as environment variables. Environment variables will take precedence over credentials provided via this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_azure_kms#credentials_wo KeymgmtAzureKms#credentials_wo}

---

##### `credentialsWoVersion`<sup>Optional</sup> <a name="credentialsWoVersion" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.credentialsWoVersion"></a>

```typescript
public readonly credentialsWoVersion: number;
```

- *Type:* number

Version counter for the write-only `credentials_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when credentials change. Increment this value whenever you update `credentials_wo` to ensure the new credentials are sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_azure_kms#credentials_wo_version KeymgmtAzureKms#credentials_wo_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.keymgmtAzureKms.KeymgmtAzureKmsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_azure_kms#namespace KeymgmtAzureKms#namespace}

---



