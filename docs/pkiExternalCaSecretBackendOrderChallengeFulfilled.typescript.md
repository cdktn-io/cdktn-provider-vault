# `pkiExternalCaSecretBackendOrderChallengeFulfilled` Submodule <a name="`pkiExternalCaSecretBackendOrderChallengeFulfilled` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendOrderChallengeFulfilled <a name="PkiExternalCaSecretBackendOrderChallengeFulfilled" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled vault_pki_external_ca_secret_backend_order_challenge_fulfilled}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendOrderChallengeFulfilled } from '@cdktn/provider-vault'

new pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled(scope: Construct, id: string, config: PkiExternalCaSecretBackendOrderChallengeFulfilledConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig">PkiExternalCaSecretBackendOrderChallengeFulfilledConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig">PkiExternalCaSecretBackendOrderChallengeFulfilledConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendOrderChallengeFulfilled resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isConstruct"></a>

```typescript
import { pkiExternalCaSecretBackendOrderChallengeFulfilled } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformElement"></a>

```typescript
import { pkiExternalCaSecretBackendOrderChallengeFulfilled } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformResource"></a>

```typescript
import { pkiExternalCaSecretBackendOrderChallengeFulfilled } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.generateConfigForImport"></a>

```typescript
import { pkiExternalCaSecretBackendOrderChallengeFulfilled } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendOrderChallengeFulfilled resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiExternalCaSecretBackendOrderChallengeFulfilled to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiExternalCaSecretBackendOrderChallengeFulfilled that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendOrderChallengeFulfilled to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.challengeTypeInput">challengeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.orderIdInput">orderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.challengeType">challengeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.orderId">orderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `challengeTypeInput`<sup>Optional</sup> <a name="challengeTypeInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.challengeTypeInput"></a>

```typescript
public readonly challengeTypeInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `orderIdInput`<sup>Optional</sup> <a name="orderIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.orderIdInput"></a>

```typescript
public readonly orderIdInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `challengeType`<sup>Required</sup> <a name="challengeType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.challengeType"></a>

```typescript
public readonly challengeType: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendOrderChallengeFulfilledConfig <a name="PkiExternalCaSecretBackendOrderChallengeFulfilledConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendOrderChallengeFulfilled } from '@cdktn/provider-vault'

const pkiExternalCaSecretBackendOrderChallengeFulfilledConfig: pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.challengeType">challengeType</a></code> | <code>string</code> | The type of ACME challenge that was fulfilled. Valid values are `http-01`, `dns-01`, `tls-alpn-01`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.identifier">identifier</a></code> | <code>string</code> | The identifier (domain name) for which the challenge was fulfilled. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.mount">mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.orderId">orderId</a></code> | <code>string</code> | The unique identifier for the ACME order. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.roleName">roleName</a></code> | <code>string</code> | Name of the role associated with the order. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `challengeType`<sup>Required</sup> <a name="challengeType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.challengeType"></a>

```typescript
public readonly challengeType: string;
```

- *Type:* string

The type of ACME challenge that was fulfilled. Valid values are `http-01`, `dns-01`, `tls-alpn-01`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#challenge_type PkiExternalCaSecretBackendOrderChallengeFulfilled#challenge_type}

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The identifier (domain name) for which the challenge was fulfilled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#identifier PkiExternalCaSecretBackendOrderChallengeFulfilled#identifier}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#mount PkiExternalCaSecretBackendOrderChallengeFulfilled#mount}

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

The unique identifier for the ACME order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#order_id PkiExternalCaSecretBackendOrderChallengeFulfilled#order_id}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Name of the role associated with the order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#role_name PkiExternalCaSecretBackendOrderChallengeFulfilled#role_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#namespace PkiExternalCaSecretBackendOrderChallengeFulfilled#namespace}

---



