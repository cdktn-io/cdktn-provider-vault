# `oauthResourceServerConfigProfile` Submodule <a name="`oauthResourceServerConfigProfile` Submodule" id="@cdktn/provider-vault.oauthResourceServerConfigProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthResourceServerConfigProfile <a name="OauthResourceServerConfigProfile" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile vault_oauth_resource_server_config_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer"></a>

```typescript
import { oauthResourceServerConfigProfile } from '@cdktn/provider-vault'

new oauthResourceServerConfigProfile.OauthResourceServerConfigProfile(scope: Construct, id: string, config: OauthResourceServerConfigProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig">OauthResourceServerConfigProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig">OauthResourceServerConfigProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys">putPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetClockSkewLeeway">resetClockSkewLeeway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksCaPem">resetJwksCaPem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksUri">resetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwtType">resetJwtType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNoDefaultPolicy">resetNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOptionalAuthorizationDetails">resetOptionalAuthorizationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetPublicKeys">resetPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetSupportedAlgorithms">resetSupportedAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUseJwks">resetUseJwks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUserClaim">resetUserClaim</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPublicKeys` <a name="putPublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys"></a>

```typescript
public putPublicKeys(value: IResolvable | OauthResourceServerConfigProfilePublicKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]

---

##### `resetAudiences` <a name="resetAudiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetAudiences"></a>

```typescript
public resetAudiences(): void
```

##### `resetClockSkewLeeway` <a name="resetClockSkewLeeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetClockSkewLeeway"></a>

```typescript
public resetClockSkewLeeway(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetJwksCaPem` <a name="resetJwksCaPem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksCaPem"></a>

```typescript
public resetJwksCaPem(): void
```

##### `resetJwksUri` <a name="resetJwksUri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksUri"></a>

```typescript
public resetJwksUri(): void
```

##### `resetJwtType` <a name="resetJwtType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwtType"></a>

```typescript
public resetJwtType(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNoDefaultPolicy` <a name="resetNoDefaultPolicy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNoDefaultPolicy"></a>

```typescript
public resetNoDefaultPolicy(): void
```

##### `resetOptionalAuthorizationDetails` <a name="resetOptionalAuthorizationDetails" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOptionalAuthorizationDetails"></a>

```typescript
public resetOptionalAuthorizationDetails(): void
```

##### `resetPublicKeys` <a name="resetPublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetPublicKeys"></a>

```typescript
public resetPublicKeys(): void
```

##### `resetSupportedAlgorithms` <a name="resetSupportedAlgorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetSupportedAlgorithms"></a>

```typescript
public resetSupportedAlgorithms(): void
```

##### `resetUseJwks` <a name="resetUseJwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUseJwks"></a>

```typescript
public resetUseJwks(): void
```

##### `resetUserClaim` <a name="resetUserClaim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUserClaim"></a>

```typescript
public resetUserClaim(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OauthResourceServerConfigProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct"></a>

```typescript
import { oauthResourceServerConfigProfile } from '@cdktn/provider-vault'

oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement"></a>

```typescript
import { oauthResourceServerConfigProfile } from '@cdktn/provider-vault'

oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource"></a>

```typescript
import { oauthResourceServerConfigProfile } from '@cdktn/provider-vault'

oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport"></a>

```typescript
import { oauthResourceServerConfigProfile } from '@cdktn/provider-vault'

oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OauthResourceServerConfigProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OauthResourceServerConfigProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OauthResourceServerConfigProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OauthResourceServerConfigProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeys">publicKeys</a></code> | <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList">OauthResourceServerConfigProfilePublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiencesInput">audiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeewayInput">clockSkewLeewayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerIdInput">issuerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPemInput">jwksCaPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUriInput">jwksUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtTypeInput">jwtTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicyInput">noDefaultPolicyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetailsInput">optionalAuthorizationDetailsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeysInput">publicKeysInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithmsInput">supportedAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwksInput">useJwksInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaimInput">userClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiences">audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeeway">clockSkewLeeway</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerId">issuerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPem">jwksCaPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUri">jwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtType">jwtType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicy">noDefaultPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetails">optionalAuthorizationDetails</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithms">supportedAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwks">useJwks</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaim">userClaim</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `publicKeys`<sup>Required</sup> <a name="publicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeys"></a>

```typescript
public readonly publicKeys: OauthResourceServerConfigProfilePublicKeysList;
```

- *Type:* <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList">OauthResourceServerConfigProfilePublicKeysList</a>

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiencesInput"></a>

```typescript
public readonly audiencesInput: string[];
```

- *Type:* string[]

---

##### `clockSkewLeewayInput`<sup>Optional</sup> <a name="clockSkewLeewayInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeewayInput"></a>

```typescript
public readonly clockSkewLeewayInput: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `issuerIdInput`<sup>Optional</sup> <a name="issuerIdInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerIdInput"></a>

```typescript
public readonly issuerIdInput: string;
```

- *Type:* string

---

##### `jwksCaPemInput`<sup>Optional</sup> <a name="jwksCaPemInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPemInput"></a>

```typescript
public readonly jwksCaPemInput: string;
```

- *Type:* string

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUriInput"></a>

```typescript
public readonly jwksUriInput: string;
```

- *Type:* string

---

##### `jwtTypeInput`<sup>Optional</sup> <a name="jwtTypeInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtTypeInput"></a>

```typescript
public readonly jwtTypeInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `noDefaultPolicyInput`<sup>Optional</sup> <a name="noDefaultPolicyInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicyInput"></a>

```typescript
public readonly noDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `optionalAuthorizationDetailsInput`<sup>Optional</sup> <a name="optionalAuthorizationDetailsInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetailsInput"></a>

```typescript
public readonly optionalAuthorizationDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `publicKeysInput`<sup>Optional</sup> <a name="publicKeysInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeysInput"></a>

```typescript
public readonly publicKeysInput: IResolvable | OauthResourceServerConfigProfilePublicKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]

---

##### `supportedAlgorithmsInput`<sup>Optional</sup> <a name="supportedAlgorithmsInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithmsInput"></a>

```typescript
public readonly supportedAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `useJwksInput`<sup>Optional</sup> <a name="useJwksInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwksInput"></a>

```typescript
public readonly useJwksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userClaimInput`<sup>Optional</sup> <a name="userClaimInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaimInput"></a>

```typescript
public readonly userClaimInput: string;
```

- *Type:* string

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

---

##### `clockSkewLeeway`<sup>Required</sup> <a name="clockSkewLeeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeeway"></a>

```typescript
public readonly clockSkewLeeway: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `issuerId`<sup>Required</sup> <a name="issuerId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerId"></a>

```typescript
public readonly issuerId: string;
```

- *Type:* string

---

##### `jwksCaPem`<sup>Required</sup> <a name="jwksCaPem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPem"></a>

```typescript
public readonly jwksCaPem: string;
```

- *Type:* string

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

---

##### `jwtType`<sup>Required</sup> <a name="jwtType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtType"></a>

```typescript
public readonly jwtType: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `noDefaultPolicy`<sup>Required</sup> <a name="noDefaultPolicy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicy"></a>

```typescript
public readonly noDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `optionalAuthorizationDetails`<sup>Required</sup> <a name="optionalAuthorizationDetails" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetails"></a>

```typescript
public readonly optionalAuthorizationDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `supportedAlgorithms`<sup>Required</sup> <a name="supportedAlgorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithms"></a>

```typescript
public readonly supportedAlgorithms: string[];
```

- *Type:* string[]

---

##### `useJwks`<sup>Required</sup> <a name="useJwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwks"></a>

```typescript
public readonly useJwks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userClaim`<sup>Required</sup> <a name="userClaim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaim"></a>

```typescript
public readonly userClaim: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthResourceServerConfigProfileConfig <a name="OauthResourceServerConfigProfileConfig" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.Initializer"></a>

```typescript
import { oauthResourceServerConfigProfile } from '@cdktn/provider-vault'

const oauthResourceServerConfigProfileConfig: oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.issuerId">issuerId</a></code> | <code>string</code> | The issuer ID (iss claim) to validate against in incoming JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.profileName">profileName</a></code> | <code>string</code> | The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.audiences">audiences</a></code> | <code>string[]</code> | List of allowed audiences (aud claim) to validate in JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.clockSkewLeeway">clockSkewLeeway</a></code> | <code>number</code> | Leeway for clock skew in seconds when validating time-based claims. Defaults to 0. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksCaPem">jwksCaPem</a></code> | <code>string</code> | Optional CA certificate (PEM format) for JWKS URI TLS validation. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksUri">jwksUri</a></code> | <code>string</code> | The JWKS URI to fetch public keys from. Required when use_jwks=true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwtType">jwtType</a></code> | <code>string</code> | The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.noDefaultPolicy">noDefaultPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.optionalAuthorizationDetails">optionalAuthorizationDetails</a></code> | <code>boolean \| cdktn.IResolvable</code> | When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.publicKeys">publicKeys</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]</code> | public_keys block. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.supportedAlgorithms">supportedAlgorithms</a></code> | <code>string[]</code> | List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.useJwks">useJwks</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.userClaim">userClaim</a></code> | <code>string</code> | The claim to use as the user identifier. Defaults to 'sub'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `issuerId`<sup>Required</sup> <a name="issuerId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.issuerId"></a>

```typescript
public readonly issuerId: string;
```

- *Type:* string

The issuer ID (iss claim) to validate against in incoming JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#issuer_id OauthResourceServerConfigProfile#issuer_id}

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#profile_name OauthResourceServerConfigProfile#profile_name}

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

List of allowed audiences (aud claim) to validate in JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#audiences OauthResourceServerConfigProfile#audiences}

---

##### `clockSkewLeeway`<sup>Optional</sup> <a name="clockSkewLeeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.clockSkewLeeway"></a>

```typescript
public readonly clockSkewLeeway: number;
```

- *Type:* number

Leeway for clock skew in seconds when validating time-based claims. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#clock_skew_leeway OauthResourceServerConfigProfile#clock_skew_leeway}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#enabled OauthResourceServerConfigProfile#enabled}

---

##### `jwksCaPem`<sup>Optional</sup> <a name="jwksCaPem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksCaPem"></a>

```typescript
public readonly jwksCaPem: string;
```

- *Type:* string

Optional CA certificate (PEM format) for JWKS URI TLS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#jwks_ca_pem OauthResourceServerConfigProfile#jwks_ca_pem}

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

The JWKS URI to fetch public keys from. Required when use_jwks=true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#jwks_uri OauthResourceServerConfigProfile#jwks_uri}

---

##### `jwtType`<sup>Optional</sup> <a name="jwtType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwtType"></a>

```typescript
public readonly jwtType: string;
```

- *Type:* string

The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#jwt_type OauthResourceServerConfigProfile#jwt_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#namespace OauthResourceServerConfigProfile#namespace}

---

##### `noDefaultPolicy`<sup>Optional</sup> <a name="noDefaultPolicy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.noDefaultPolicy"></a>

```typescript
public readonly noDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#no_default_policy OauthResourceServerConfigProfile#no_default_policy}

---

##### `optionalAuthorizationDetails`<sup>Optional</sup> <a name="optionalAuthorizationDetails" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.optionalAuthorizationDetails"></a>

```typescript
public readonly optionalAuthorizationDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token.

When set to true, authorization_details in the JWT token are optional. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#optional_authorization_details OauthResourceServerConfigProfile#optional_authorization_details}

---

##### `publicKeys`<sup>Optional</sup> <a name="publicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.publicKeys"></a>

```typescript
public readonly publicKeys: IResolvable | OauthResourceServerConfigProfilePublicKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]

public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#public_keys OauthResourceServerConfigProfile#public_keys}

---

##### `supportedAlgorithms`<sup>Optional</sup> <a name="supportedAlgorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.supportedAlgorithms"></a>

```typescript
public readonly supportedAlgorithms: string[];
```

- *Type:* string[]

List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#supported_algorithms OauthResourceServerConfigProfile#supported_algorithms}

---

##### `useJwks`<sup>Optional</sup> <a name="useJwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.useJwks"></a>

```typescript
public readonly useJwks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#use_jwks OauthResourceServerConfigProfile#use_jwks}

---

##### `userClaim`<sup>Optional</sup> <a name="userClaim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.userClaim"></a>

```typescript
public readonly userClaim: string;
```

- *Type:* string

The claim to use as the user identifier. Defaults to 'sub'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#user_claim OauthResourceServerConfigProfile#user_claim}

---

### OauthResourceServerConfigProfilePublicKeys <a name="OauthResourceServerConfigProfilePublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.Initializer"></a>

```typescript
import { oauthResourceServerConfigProfile } from '@cdktn/provider-vault'

const oauthResourceServerConfigProfilePublicKeys: oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.keyId">keyId</a></code> | <code>string</code> | The key ID (kid) for this public key. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.pem">pem</a></code> | <code>string</code> | The PEM-encoded public key. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The key ID (kid) for this public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#key_id OauthResourceServerConfigProfile#key_id}

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.pem"></a>

```typescript
public readonly pem: string;
```

- *Type:* string

The PEM-encoded public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#pem OauthResourceServerConfigProfile#pem}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthResourceServerConfigProfilePublicKeysList <a name="OauthResourceServerConfigProfilePublicKeysList" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer"></a>

```typescript
import { oauthResourceServerConfigProfile } from '@cdktn/provider-vault'

new oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get"></a>

```typescript
public get(index: number): OauthResourceServerConfigProfilePublicKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OauthResourceServerConfigProfilePublicKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>[]

---


### OauthResourceServerConfigProfilePublicKeysOutputReference <a name="OauthResourceServerConfigProfilePublicKeysOutputReference" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer"></a>

```typescript
import { oauthResourceServerConfigProfile } from '@cdktn/provider-vault'

new oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pemInput">pemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pem">pem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `pemInput`<sup>Optional</sup> <a name="pemInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pemInput"></a>

```typescript
public readonly pemInput: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pem"></a>

```typescript
public readonly pem: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OauthResourceServerConfigProfilePublicKeys;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>

---



