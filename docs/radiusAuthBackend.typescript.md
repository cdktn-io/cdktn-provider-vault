# `radiusAuthBackend` Submodule <a name="`radiusAuthBackend` Submodule" id="@cdktn/provider-vault.radiusAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RadiusAuthBackend <a name="RadiusAuthBackend" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend vault_radius_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer"></a>

```typescript
import { radiusAuthBackend } from '@cdktn/provider-vault'

new radiusAuthBackend.RadiusAuthBackend(scope: Construct, id: string, config: RadiusAuthBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig">RadiusAuthBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig">RadiusAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetAliasMetadata">resetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetDialTimeout">resetDialTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNasPort">resetNasPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetReadTimeout">resetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenType">resetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetUnregisteredUserPolicies">resetUnregisteredUserPolicies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAliasMetadata` <a name="resetAliasMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetAliasMetadata"></a>

```typescript
public resetAliasMetadata(): void
```

##### `resetDialTimeout` <a name="resetDialTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetDialTimeout"></a>

```typescript
public resetDialTimeout(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNasPort` <a name="resetNasPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNasPort"></a>

```typescript
public resetNasPort(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetReadTimeout` <a name="resetReadTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetReadTimeout"></a>

```typescript
public resetReadTimeout(): void
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenBoundCidrs"></a>

```typescript
public resetTokenBoundCidrs(): void
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenExplicitMaxTtl"></a>

```typescript
public resetTokenExplicitMaxTtl(): void
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenMaxTtl"></a>

```typescript
public resetTokenMaxTtl(): void
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNoDefaultPolicy"></a>

```typescript
public resetTokenNoDefaultPolicy(): void
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNumUses"></a>

```typescript
public resetTokenNumUses(): void
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPeriod"></a>

```typescript
public resetTokenPeriod(): void
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPolicies"></a>

```typescript
public resetTokenPolicies(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenType"></a>

```typescript
public resetTokenType(): void
```

##### `resetUnregisteredUserPolicies` <a name="resetUnregisteredUserPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetUnregisteredUserPolicies"></a>

```typescript
public resetUnregisteredUserPolicies(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RadiusAuthBackend resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct"></a>

```typescript
import { radiusAuthBackend } from '@cdktn/provider-vault'

radiusAuthBackend.RadiusAuthBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement"></a>

```typescript
import { radiusAuthBackend } from '@cdktn/provider-vault'

radiusAuthBackend.RadiusAuthBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource"></a>

```typescript
import { radiusAuthBackend } from '@cdktn/provider-vault'

radiusAuthBackend.RadiusAuthBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport"></a>

```typescript
import { radiusAuthBackend } from '@cdktn/provider-vault'

radiusAuthBackend.RadiusAuthBackend.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RadiusAuthBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RadiusAuthBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RadiusAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RadiusAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasIdentifier">nasIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadataInput">aliasMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeoutInput">dialTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPortInput">nasPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeoutInput">readTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoInput">secretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersionInput">secretWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtlInput">tokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPoliciesInput">unregisteredUserPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadata">aliasMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeout">dialTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPort">nasPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeout">readTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWo">secretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersion">secretWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPolicies">unregisteredUserPolicies</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `nasIdentifier`<sup>Required</sup> <a name="nasIdentifier" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasIdentifier"></a>

```typescript
public readonly nasIdentifier: string;
```

- *Type:* string

---

##### `aliasMetadataInput`<sup>Optional</sup> <a name="aliasMetadataInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadataInput"></a>

```typescript
public readonly aliasMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dialTimeoutInput`<sup>Optional</sup> <a name="dialTimeoutInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeoutInput"></a>

```typescript
public readonly dialTimeoutInput: number;
```

- *Type:* number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `nasPortInput`<sup>Optional</sup> <a name="nasPortInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPortInput"></a>

```typescript
public readonly nasPortInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `readTimeoutInput`<sup>Optional</sup> <a name="readTimeoutInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeoutInput"></a>

```typescript
public readonly readTimeoutInput: number;
```

- *Type:* number

---

##### `secretWoInput`<sup>Optional</sup> <a name="secretWoInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoInput"></a>

```typescript
public readonly secretWoInput: string;
```

- *Type:* string

---

##### `secretWoVersionInput`<sup>Optional</sup> <a name="secretWoVersionInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersionInput"></a>

```typescript
public readonly secretWoVersionInput: number;
```

- *Type:* number

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrsInput"></a>

```typescript
public readonly tokenBoundCidrsInput: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtlInput"></a>

```typescript
public readonly tokenExplicitMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtlInput"></a>

```typescript
public readonly tokenMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicyInput"></a>

```typescript
public readonly tokenNoDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUsesInput"></a>

```typescript
public readonly tokenNumUsesInput: number;
```

- *Type:* number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriodInput"></a>

```typescript
public readonly tokenPeriodInput: number;
```

- *Type:* number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPoliciesInput"></a>

```typescript
public readonly tokenPoliciesInput: string[];
```

- *Type:* string[]

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: number;
```

- *Type:* number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `unregisteredUserPoliciesInput`<sup>Optional</sup> <a name="unregisteredUserPoliciesInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPoliciesInput"></a>

```typescript
public readonly unregisteredUserPoliciesInput: string[];
```

- *Type:* string[]

---

##### `aliasMetadata`<sup>Required</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadata"></a>

```typescript
public readonly aliasMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dialTimeout`<sup>Required</sup> <a name="dialTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeout"></a>

```typescript
public readonly dialTimeout: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `nasPort`<sup>Required</sup> <a name="nasPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPort"></a>

```typescript
public readonly nasPort: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `readTimeout`<sup>Required</sup> <a name="readTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeout"></a>

```typescript
public readonly readTimeout: number;
```

- *Type:* number

---

##### `secretWo`<sup>Required</sup> <a name="secretWo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWo"></a>

```typescript
public readonly secretWo: string;
```

- *Type:* string

---

##### `secretWoVersion`<sup>Required</sup> <a name="secretWoVersion" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersion"></a>

```typescript
public readonly secretWoVersion: number;
```

- *Type:* number

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `unregisteredUserPolicies`<sup>Required</sup> <a name="unregisteredUserPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPolicies"></a>

```typescript
public readonly unregisteredUserPolicies: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RadiusAuthBackendConfig <a name="RadiusAuthBackendConfig" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.Initializer"></a>

```typescript
import { radiusAuthBackend } from '@cdktn/provider-vault'

const radiusAuthBackendConfig: radiusAuthBackend.RadiusAuthBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.host">host</a></code> | <code>string</code> | The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.mount">mount</a></code> | <code>string</code> | Path of the enabled RADIUS auth backend mount to configure. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWo">secretWo</a></code> | <code>string</code> | The RADIUS shared secret. This is a write-only field and will not be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWoVersion">secretWoVersion</a></code> | <code>number</code> | Version counter for the write-only `secret_wo` field. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.aliasMetadata">aliasMetadata</a></code> | <code>{[ key: string ]: string}</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dialTimeout">dialTimeout</a></code> | <code>number</code> | Number of seconds to wait for a backend connection before timing out. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.nasPort">nasPort</a></code> | <code>number</code> | The NAS-Port attribute of the RADIUS request. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.port">port</a></code> | <code>number</code> | The UDP port where the RADIUS server is listening on. Defaults to `1812`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.readTimeout">readTimeout</a></code> | <code>number</code> | Number of seconds to wait for a response from the RADIUS server. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenType">tokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.unregisteredUserPolicies">unregisteredUserPolicies</a></code> | <code>string[]</code> | A set of policies to be granted to unregistered users. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#host RadiusAuthBackend#host}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path of the enabled RADIUS auth backend mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#mount RadiusAuthBackend#mount}

---

##### `secretWo`<sup>Required</sup> <a name="secretWo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWo"></a>

```typescript
public readonly secretWo: string;
```

- *Type:* string

The RADIUS shared secret. This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#secret_wo RadiusAuthBackend#secret_wo}

---

##### `secretWoVersion`<sup>Required</sup> <a name="secretWoVersion" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWoVersion"></a>

```typescript
public readonly secretWoVersion: number;
```

- *Type:* number

Version counter for the write-only `secret_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the secret changes. Increment this value whenever you update `secret_wo` so Terraform detects the change and applies an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#secret_wo_version RadiusAuthBackend#secret_wo_version}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.aliasMetadata"></a>

```typescript
public readonly aliasMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#alias_metadata RadiusAuthBackend#alias_metadata}

---

##### `dialTimeout`<sup>Optional</sup> <a name="dialTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dialTimeout"></a>

```typescript
public readonly dialTimeout: number;
```

- *Type:* number

Number of seconds to wait for a backend connection before timing out.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#dial_timeout RadiusAuthBackend#dial_timeout}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#namespace RadiusAuthBackend#namespace}

---

##### `nasPort`<sup>Optional</sup> <a name="nasPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.nasPort"></a>

```typescript
public readonly nasPort: number;
```

- *Type:* number

The NAS-Port attribute of the RADIUS request.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#nas_port RadiusAuthBackend#nas_port}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The UDP port where the RADIUS server is listening on. Defaults to `1812`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#port RadiusAuthBackend#port}

---

##### `readTimeout`<sup>Optional</sup> <a name="readTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.readTimeout"></a>

```typescript
public readonly readTimeout: number;
```

- *Type:* number

Number of seconds to wait for a response from the RADIUS server.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#read_timeout RadiusAuthBackend#read_timeout}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_bound_cidrs RadiusAuthBackend#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_explicit_max_ttl RadiusAuthBackend#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_max_ttl RadiusAuthBackend#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_no_default_policy RadiusAuthBackend#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_num_uses RadiusAuthBackend#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_period RadiusAuthBackend#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_policies RadiusAuthBackend#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_ttl RadiusAuthBackend#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#token_type RadiusAuthBackend#token_type}

---

##### `unregisteredUserPolicies`<sup>Optional</sup> <a name="unregisteredUserPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.unregisteredUserPolicies"></a>

```typescript
public readonly unregisteredUserPolicies: string[];
```

- *Type:* string[]

A set of policies to be granted to unregistered users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend#unregistered_user_policies RadiusAuthBackend#unregistered_user_policies}

---



