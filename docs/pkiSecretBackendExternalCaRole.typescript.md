# `pkiSecretBackendExternalCaRole` Submodule <a name="`pkiSecretBackendExternalCaRole` Submodule" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendExternalCaRole <a name="PkiSecretBackendExternalCaRole" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role vault_pki_secret_backend_external_ca_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer"></a>

```typescript
import { pkiSecretBackendExternalCaRole } from '@cdktn/provider-vault'

new pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole(scope: Construct, id: string, config: PkiSecretBackendExternalCaRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig">PkiSecretBackendExternalCaRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig">PkiSecretBackendExternalCaRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetAllowedChallengeTypes">resetAllowedChallengeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetAllowedDomainOptions">resetAllowedDomainOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetAllowedDomains">resetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetCsrGenerateKeyType">resetCsrGenerateKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetCsrIdentifierPopulation">resetCsrIdentifierPopulation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedChallengeTypes` <a name="resetAllowedChallengeTypes" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetAllowedChallengeTypes"></a>

```typescript
public resetAllowedChallengeTypes(): void
```

##### `resetAllowedDomainOptions` <a name="resetAllowedDomainOptions" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetAllowedDomainOptions"></a>

```typescript
public resetAllowedDomainOptions(): void
```

##### `resetAllowedDomains` <a name="resetAllowedDomains" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetAllowedDomains"></a>

```typescript
public resetAllowedDomains(): void
```

##### `resetCsrGenerateKeyType` <a name="resetCsrGenerateKeyType" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetCsrGenerateKeyType"></a>

```typescript
public resetCsrGenerateKeyType(): void
```

##### `resetCsrIdentifierPopulation` <a name="resetCsrIdentifierPopulation" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetCsrIdentifierPopulation"></a>

```typescript
public resetCsrIdentifierPopulation(): void
```

##### `resetForce` <a name="resetForce" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetForce"></a>

```typescript
public resetForce(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiSecretBackendExternalCaRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isConstruct"></a>

```typescript
import { pkiSecretBackendExternalCaRole } from '@cdktn/provider-vault'

pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformElement"></a>

```typescript
import { pkiSecretBackendExternalCaRole } from '@cdktn/provider-vault'

pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformResource"></a>

```typescript
import { pkiSecretBackendExternalCaRole } from '@cdktn/provider-vault'

pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendExternalCaRole } from '@cdktn/provider-vault'

pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PkiSecretBackendExternalCaRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendExternalCaRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendExternalCaRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendExternalCaRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.lastUpdateDate">lastUpdateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.acmeAccountNameInput">acmeAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedChallengeTypesInput">allowedChallengeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomainOptionsInput">allowedDomainOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomainsInput">allowedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrGenerateKeyTypeInput">csrGenerateKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrIdentifierPopulationInput">csrIdentifierPopulationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.forceInput">forceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.acmeAccountName">acmeAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedChallengeTypes">allowedChallengeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomainOptions">allowedDomainOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomains">allowedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrGenerateKeyType">csrGenerateKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrIdentifierPopulation">csrIdentifierPopulation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.force">force</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `lastUpdateDate`<sup>Required</sup> <a name="lastUpdateDate" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.lastUpdateDate"></a>

```typescript
public readonly lastUpdateDate: string;
```

- *Type:* string

---

##### `acmeAccountNameInput`<sup>Optional</sup> <a name="acmeAccountNameInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.acmeAccountNameInput"></a>

```typescript
public readonly acmeAccountNameInput: string;
```

- *Type:* string

---

##### `allowedChallengeTypesInput`<sup>Optional</sup> <a name="allowedChallengeTypesInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedChallengeTypesInput"></a>

```typescript
public readonly allowedChallengeTypesInput: string[];
```

- *Type:* string[]

---

##### `allowedDomainOptionsInput`<sup>Optional</sup> <a name="allowedDomainOptionsInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomainOptionsInput"></a>

```typescript
public readonly allowedDomainOptionsInput: string[];
```

- *Type:* string[]

---

##### `allowedDomainsInput`<sup>Optional</sup> <a name="allowedDomainsInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomainsInput"></a>

```typescript
public readonly allowedDomainsInput: string[];
```

- *Type:* string[]

---

##### `csrGenerateKeyTypeInput`<sup>Optional</sup> <a name="csrGenerateKeyTypeInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrGenerateKeyTypeInput"></a>

```typescript
public readonly csrGenerateKeyTypeInput: string;
```

- *Type:* string

---

##### `csrIdentifierPopulationInput`<sup>Optional</sup> <a name="csrIdentifierPopulationInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrIdentifierPopulationInput"></a>

```typescript
public readonly csrIdentifierPopulationInput: string;
```

- *Type:* string

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.forceInput"></a>

```typescript
public readonly forceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `acmeAccountName`<sup>Required</sup> <a name="acmeAccountName" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.acmeAccountName"></a>

```typescript
public readonly acmeAccountName: string;
```

- *Type:* string

---

##### `allowedChallengeTypes`<sup>Required</sup> <a name="allowedChallengeTypes" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedChallengeTypes"></a>

```typescript
public readonly allowedChallengeTypes: string[];
```

- *Type:* string[]

---

##### `allowedDomainOptions`<sup>Required</sup> <a name="allowedDomainOptions" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomainOptions"></a>

```typescript
public readonly allowedDomainOptions: string[];
```

- *Type:* string[]

---

##### `allowedDomains`<sup>Required</sup> <a name="allowedDomains" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string[];
```

- *Type:* string[]

---

##### `csrGenerateKeyType`<sup>Required</sup> <a name="csrGenerateKeyType" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrGenerateKeyType"></a>

```typescript
public readonly csrGenerateKeyType: string;
```

- *Type:* string

---

##### `csrIdentifierPopulation`<sup>Required</sup> <a name="csrIdentifierPopulation" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrIdentifierPopulation"></a>

```typescript
public readonly csrIdentifierPopulation: string;
```

- *Type:* string

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendExternalCaRoleConfig <a name="PkiSecretBackendExternalCaRoleConfig" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.Initializer"></a>

```typescript
import { pkiSecretBackendExternalCaRole } from '@cdktn/provider-vault'

const pkiSecretBackendExternalCaRoleConfig: pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.acmeAccountName">acmeAccountName</a></code> | <code>string</code> | The ACME account to use when validating certificates. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.mount">mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.name">name</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.allowedChallengeTypes">allowedChallengeTypes</a></code> | <code>string[]</code> | The list of challenge types that are allowed to be used. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.allowedDomainOptions">allowedDomainOptions</a></code> | <code>string[]</code> | A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.allowedDomains">allowedDomains</a></code> | <code>string[]</code> | A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.csrGenerateKeyType">csrGenerateKeyType</a></code> | <code>string</code> | The key type and size/parameters to use when generating a new key if running in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.csrIdentifierPopulation">csrIdentifierPopulation</a></code> | <code>string</code> | The technique used to populate a CSR from the provided identifiers in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.force">force</a></code> | <code>boolean \| cdktn.IResolvable</code> | Force deletion even when active orders exist. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `acmeAccountName`<sup>Required</sup> <a name="acmeAccountName" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.acmeAccountName"></a>

```typescript
public readonly acmeAccountName: string;
```

- *Type:* string

The ACME account to use when validating certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#acme_account_name PkiSecretBackendExternalCaRole#acme_account_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#mount PkiSecretBackendExternalCaRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#name PkiSecretBackendExternalCaRole#name}

---

##### `allowedChallengeTypes`<sup>Optional</sup> <a name="allowedChallengeTypes" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.allowedChallengeTypes"></a>

```typescript
public readonly allowedChallengeTypes: string[];
```

- *Type:* string[]

The list of challenge types that are allowed to be used.

Valid values are: `http-01`, `dns-01`, `tls-alpn-01`. Defaults to all challenge types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#allowed_challenge_types PkiSecretBackendExternalCaRole#allowed_challenge_types}

---

##### `allowedDomainOptions`<sup>Optional</sup> <a name="allowedDomainOptions" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.allowedDomainOptions"></a>

```typescript
public readonly allowedDomainOptions: string[];
```

- *Type:* string[]

A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client.

Valid values are: `bare_domains`, `subdomains`, `wildcards`, `globs`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#allowed_domain_options PkiSecretBackendExternalCaRole#allowed_domain_options}

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string[];
```

- *Type:* string[]

A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#allowed_domains PkiSecretBackendExternalCaRole#allowed_domains}

---

##### `csrGenerateKeyType`<sup>Optional</sup> <a name="csrGenerateKeyType" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.csrGenerateKeyType"></a>

```typescript
public readonly csrGenerateKeyType: string;
```

- *Type:* string

The key type and size/parameters to use when generating a new key if running in the identifier workflow.

Valid values are: `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#csr_generate_key_type PkiSecretBackendExternalCaRole#csr_generate_key_type}

---

##### `csrIdentifierPopulation`<sup>Optional</sup> <a name="csrIdentifierPopulation" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.csrIdentifierPopulation"></a>

```typescript
public readonly csrIdentifierPopulation: string;
```

- *Type:* string

The technique used to populate a CSR from the provided identifiers in the identifier workflow.

Valid values are: `cn_first`, `sans_only`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#csr_identifier_population PkiSecretBackendExternalCaRole#csr_identifier_population}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Force deletion even when active orders exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#force PkiSecretBackendExternalCaRole#force}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#namespace PkiSecretBackendExternalCaRole#namespace}

---



