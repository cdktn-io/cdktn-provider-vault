# `pkiSecretBackendAcmeAccount` Submodule <a name="`pkiSecretBackendAcmeAccount` Submodule" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendAcmeAccount <a name="PkiSecretBackendAcmeAccount" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account vault_pki_secret_backend_acme_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer"></a>

```typescript
import { pkiSecretBackendAcmeAccount } from '@cdktn/provider-vault'

new pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount(scope: Construct, id: string, config: PkiSecretBackendAcmeAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig">PkiSecretBackendAcmeAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig">PkiSecretBackendAcmeAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetEabKey">resetEabKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetEabKid">resetEabKid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetTrustedCa">resetTrustedCa</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEabKey` <a name="resetEabKey" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetEabKey"></a>

```typescript
public resetEabKey(): void
```

##### `resetEabKid` <a name="resetEabKid" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetEabKid"></a>

```typescript
public resetEabKid(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetKeyType"></a>

```typescript
public resetKeyType(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTrustedCa` <a name="resetTrustedCa" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetTrustedCa"></a>

```typescript
public resetTrustedCa(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiSecretBackendAcmeAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isConstruct"></a>

```typescript
import { pkiSecretBackendAcmeAccount } from '@cdktn/provider-vault'

pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformElement"></a>

```typescript
import { pkiSecretBackendAcmeAccount } from '@cdktn/provider-vault'

pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformResource"></a>

```typescript
import { pkiSecretBackendAcmeAccount } from '@cdktn/provider-vault'

pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendAcmeAccount } from '@cdktn/provider-vault'

pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PkiSecretBackendAcmeAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendAcmeAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendAcmeAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendAcmeAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.activeKeyVersion">activeKeyVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.directoryUrlInput">directoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKeyInput">eabKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKidInput">eabKidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.emailContactsInput">emailContactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.trustedCaInput">trustedCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.directoryUrl">directoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKey">eabKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKid">eabKid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.emailContacts">emailContacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.trustedCa">trustedCa</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `activeKeyVersion`<sup>Required</sup> <a name="activeKeyVersion" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.activeKeyVersion"></a>

```typescript
public readonly activeKeyVersion: number;
```

- *Type:* number

---

##### `directoryUrlInput`<sup>Optional</sup> <a name="directoryUrlInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.directoryUrlInput"></a>

```typescript
public readonly directoryUrlInput: string;
```

- *Type:* string

---

##### `eabKeyInput`<sup>Optional</sup> <a name="eabKeyInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKeyInput"></a>

```typescript
public readonly eabKeyInput: string;
```

- *Type:* string

---

##### `eabKidInput`<sup>Optional</sup> <a name="eabKidInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKidInput"></a>

```typescript
public readonly eabKidInput: string;
```

- *Type:* string

---

##### `emailContactsInput`<sup>Optional</sup> <a name="emailContactsInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.emailContactsInput"></a>

```typescript
public readonly emailContactsInput: string[];
```

- *Type:* string[]

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `trustedCaInput`<sup>Optional</sup> <a name="trustedCaInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.trustedCaInput"></a>

```typescript
public readonly trustedCaInput: string;
```

- *Type:* string

---

##### `directoryUrl`<sup>Required</sup> <a name="directoryUrl" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.directoryUrl"></a>

```typescript
public readonly directoryUrl: string;
```

- *Type:* string

---

##### `eabKey`<sup>Required</sup> <a name="eabKey" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKey"></a>

```typescript
public readonly eabKey: string;
```

- *Type:* string

---

##### `eabKid`<sup>Required</sup> <a name="eabKid" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKid"></a>

```typescript
public readonly eabKid: string;
```

- *Type:* string

---

##### `emailContacts`<sup>Required</sup> <a name="emailContacts" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.emailContacts"></a>

```typescript
public readonly emailContacts: string[];
```

- *Type:* string[]

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `trustedCa`<sup>Required</sup> <a name="trustedCa" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.trustedCa"></a>

```typescript
public readonly trustedCa: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendAcmeAccountConfig <a name="PkiSecretBackendAcmeAccountConfig" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.Initializer"></a>

```typescript
import { pkiSecretBackendAcmeAccount } from '@cdktn/provider-vault'

const pkiSecretBackendAcmeAccountConfig: pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.directoryUrl">directoryUrl</a></code> | <code>string</code> | ACME Directory URL. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.emailContacts">emailContacts</a></code> | <code>string[]</code> | Email addresses for the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.mount">mount</a></code> | <code>string</code> | The path where the PKI secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.name">name</a></code> | <code>string</code> | Name of the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.eabKey">eabKey</a></code> | <code>string</code> | A standard base64 encoded external binding token to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.eabKid">eabKid</a></code> | <code>string</code> | The external binding key ID to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.keyType">keyType</a></code> | <code>string</code> | Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.trustedCa">trustedCa</a></code> | <code>string</code> | Trusted CA certificates for the ACME server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `directoryUrl`<sup>Required</sup> <a name="directoryUrl" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.directoryUrl"></a>

```typescript
public readonly directoryUrl: string;
```

- *Type:* string

ACME Directory URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#directory_url PkiSecretBackendAcmeAccount#directory_url}

---

##### `emailContacts`<sup>Required</sup> <a name="emailContacts" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.emailContacts"></a>

```typescript
public readonly emailContacts: string[];
```

- *Type:* string[]

Email addresses for the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#email_contacts PkiSecretBackendAcmeAccount#email_contacts}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the PKI secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#mount PkiSecretBackendAcmeAccount#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#name PkiSecretBackendAcmeAccount#name}

---

##### `eabKey`<sup>Optional</sup> <a name="eabKey" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.eabKey"></a>

```typescript
public readonly eabKey: string;
```

- *Type:* string

A standard base64 encoded external binding token to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#eab_key PkiSecretBackendAcmeAccount#eab_key}

---

##### `eabKid`<sup>Optional</sup> <a name="eabKid" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.eabKid"></a>

```typescript
public readonly eabKid: string;
```

- *Type:* string

The external binding key ID to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#eab_kid PkiSecretBackendAcmeAccount#eab_kid}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#key_type PkiSecretBackendAcmeAccount#key_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#namespace PkiSecretBackendAcmeAccount#namespace}

---

##### `trustedCa`<sup>Optional</sup> <a name="trustedCa" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.trustedCa"></a>

```typescript
public readonly trustedCa: string;
```

- *Type:* string

Trusted CA certificates for the ACME server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#trusted_ca PkiSecretBackendAcmeAccount#trusted_ca}

---



