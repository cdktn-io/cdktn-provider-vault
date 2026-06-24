# `osSecretBackendAccount` Submodule <a name="`osSecretBackendAccount` Submodule" id="@cdktn/provider-vault.osSecretBackendAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsSecretBackendAccount <a name="OsSecretBackendAccount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account vault_os_secret_backend_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer"></a>

```typescript
import { osSecretBackendAccount } from '@cdktn/provider-vault'

new osSecretBackendAccount.OsSecretBackendAccount(scope: Construct, id: string, config: OsSecretBackendAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig">OsSecretBackendAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig">OsSecretBackendAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetCustomMetadata">resetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetDisableAutomatedRotation">resetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetParentAccountRef">resetParentAccountRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationSchedule">resetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationWindow">resetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCustomMetadata` <a name="resetCustomMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetCustomMetadata"></a>

```typescript
public resetCustomMetadata(): void
```

##### `resetDisableAutomatedRotation` <a name="resetDisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetDisableAutomatedRotation"></a>

```typescript
public resetDisableAutomatedRotation(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetParentAccountRef` <a name="resetParentAccountRef" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetParentAccountRef"></a>

```typescript
public resetParentAccountRef(): void
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetPasswordPolicy"></a>

```typescript
public resetPasswordPolicy(): void
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationPeriod"></a>

```typescript
public resetRotationPeriod(): void
```

##### `resetRotationSchedule` <a name="resetRotationSchedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationSchedule"></a>

```typescript
public resetRotationSchedule(): void
```

##### `resetRotationWindow` <a name="resetRotationWindow" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationWindow"></a>

```typescript
public resetRotationWindow(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OsSecretBackendAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct"></a>

```typescript
import { osSecretBackendAccount } from '@cdktn/provider-vault'

osSecretBackendAccount.OsSecretBackendAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement"></a>

```typescript
import { osSecretBackendAccount } from '@cdktn/provider-vault'

osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource"></a>

```typescript
import { osSecretBackendAccount } from '@cdktn/provider-vault'

osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport"></a>

```typescript
import { osSecretBackendAccount } from '@cdktn/provider-vault'

osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OsSecretBackendAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsSecretBackendAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsSecretBackendAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OsSecretBackendAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lastVaultRotation">lastVaultRotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nextVaultRotation">nextVaultRotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadataInput">customMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotationInput">disableAutomatedRotationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRefInput">parentAccountRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWoInput">passwordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationScheduleInput">rotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindowInput">rotationWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadata">customMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRef">parentAccountRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicy">passwordPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWo">passwordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriod">rotationPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationSchedule">rotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindow">rotationWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `lastVaultRotation`<sup>Required</sup> <a name="lastVaultRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lastVaultRotation"></a>

```typescript
public readonly lastVaultRotation: string;
```

- *Type:* string

---

##### `nextVaultRotation`<sup>Required</sup> <a name="nextVaultRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nextVaultRotation"></a>

```typescript
public readonly nextVaultRotation: string;
```

- *Type:* string

---

##### `customMetadataInput`<sup>Optional</sup> <a name="customMetadataInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadataInput"></a>

```typescript
public readonly customMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableAutomatedRotationInput`<sup>Optional</sup> <a name="disableAutomatedRotationInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotationInput"></a>

```typescript
public readonly disableAutomatedRotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `parentAccountRefInput`<sup>Optional</sup> <a name="parentAccountRefInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRefInput"></a>

```typescript
public readonly parentAccountRefInput: string;
```

- *Type:* string

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicyInput"></a>

```typescript
public readonly passwordPolicyInput: string;
```

- *Type:* string

---

##### `passwordWoInput`<sup>Optional</sup> <a name="passwordWoInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWoInput"></a>

```typescript
public readonly passwordWoInput: string;
```

- *Type:* string

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriodInput"></a>

```typescript
public readonly rotationPeriodInput: number;
```

- *Type:* number

---

##### `rotationScheduleInput`<sup>Optional</sup> <a name="rotationScheduleInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationScheduleInput"></a>

```typescript
public readonly rotationScheduleInput: string;
```

- *Type:* string

---

##### `rotationWindowInput`<sup>Optional</sup> <a name="rotationWindowInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindowInput"></a>

```typescript
public readonly rotationWindowInput: number;
```

- *Type:* number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadata"></a>

```typescript
public readonly customMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableAutomatedRotation`<sup>Required</sup> <a name="disableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotation"></a>

```typescript
public readonly disableAutomatedRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `parentAccountRef`<sup>Required</sup> <a name="parentAccountRef" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRef"></a>

```typescript
public readonly parentAccountRef: string;
```

- *Type:* string

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: string;
```

- *Type:* string

---

##### `passwordWo`<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWo"></a>

```typescript
public readonly passwordWo: string;
```

- *Type:* string

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: number;
```

- *Type:* number

---

##### `rotationSchedule`<sup>Required</sup> <a name="rotationSchedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationSchedule"></a>

```typescript
public readonly rotationSchedule: string;
```

- *Type:* string

---

##### `rotationWindow`<sup>Required</sup> <a name="rotationWindow" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindow"></a>

```typescript
public readonly rotationWindow: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsSecretBackendAccountConfig <a name="OsSecretBackendAccountConfig" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.Initializer"></a>

```typescript
import { osSecretBackendAccount } from '@cdktn/provider-vault'

const osSecretBackendAccountConfig: osSecretBackendAccount.OsSecretBackendAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.host">host</a></code> | <code>string</code> | Name of the host this account belongs to. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.mount">mount</a></code> | <code>string</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.name">name</a></code> | <code>string</code> | Name of the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordWo">passwordWo</a></code> | <code>string</code> | Password for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.username">username</a></code> | <code>string</code> | Username for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.customMetadata">customMetadata</a></code> | <code>{[ key: string ]: string}</code> | Custom metadata for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disable automated password rotation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.parentAccountRef">parentAccountRef</a></code> | <code>string</code> | Reference to a parent account for rotation management. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordPolicy">passwordPolicy</a></code> | <code>string</code> | Name of the password policy to use for password generation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>number</code> | How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationSchedule">rotationSchedule</a></code> | <code>string</code> | Cron schedule for password rotation. Mutually exclusive with rotation_period. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationWindow">rotationWindow</a></code> | <code>number</code> | Window of time for password rotation, in seconds. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Verify the connection to the host with the provided credentials. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Name of the host this account belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#host OsSecretBackendAccount#host}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#mount OsSecretBackendAccount#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#name OsSecretBackendAccount#name}

---

##### `passwordWo`<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordWo"></a>

```typescript
public readonly passwordWo: string;
```

- *Type:* string

Password for the account.

This is write-only, will not be read back from Vault,
	and can only be set during resource creation. To update the password after creation, use the Vault CLI
	or API to call the reset endpoint directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#password_wo OsSecretBackendAccount#password_wo}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#username OsSecretBackendAccount#username}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.customMetadata"></a>

```typescript
public readonly customMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom metadata for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#custom_metadata OsSecretBackendAccount#custom_metadata}

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.disableAutomatedRotation"></a>

```typescript
public readonly disableAutomatedRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disable automated password rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#disable_automated_rotation OsSecretBackendAccount#disable_automated_rotation}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#namespace OsSecretBackendAccount#namespace}

---

##### `parentAccountRef`<sup>Optional</sup> <a name="parentAccountRef" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.parentAccountRef"></a>

```typescript
public readonly parentAccountRef: string;
```

- *Type:* string

Reference to a parent account for rotation management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#parent_account_ref OsSecretBackendAccount#parent_account_ref}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: string;
```

- *Type:* string

Name of the password policy to use for password generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#password_policy OsSecretBackendAccount#password_policy}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: number;
```

- *Type:* number

How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_period OsSecretBackendAccount#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationSchedule"></a>

```typescript
public readonly rotationSchedule: string;
```

- *Type:* string

Cron schedule for password rotation. Mutually exclusive with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_schedule OsSecretBackendAccount#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationWindow"></a>

```typescript
public readonly rotationWindow: number;
```

- *Type:* number

Window of time for password rotation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#rotation_window OsSecretBackendAccount#rotation_window}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Verify the connection to the host with the provided credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/os_secret_backend_account#verify_connection OsSecretBackendAccount#verify_connection}

---



