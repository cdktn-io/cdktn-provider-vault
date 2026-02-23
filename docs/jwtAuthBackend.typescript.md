# `jwtAuthBackend` Submodule <a name="`jwtAuthBackend` Submodule" id="@cdktn/provider-vault.jwtAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JwtAuthBackend <a name="JwtAuthBackend" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend vault_jwt_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer"></a>

```typescript
import { jwtAuthBackend } from '@cdktn/provider-vault'

new jwtAuthBackend.JwtAuthBackend(scope: Construct, id: string, config?: JwtAuthBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig">JwtAuthBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig">JwtAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune">putTune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetBoundIssuer">resetBoundIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDefaultRole">resetDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksCaPem">resetJwksCaPem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksPairs">resetJwksPairs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksUrl">resetJwksUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtSupportedAlgs">resetJwtSupportedAlgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtValidationPubkeys">resetJwtValidationPubkeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespaceInState">resetNamespaceInState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientId">resetOidcClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecret">resetOidcClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecretWo">resetOidcClientSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecretWoVersion">resetOidcClientSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryCaPem">resetOidcDiscoveryCaPem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryUrl">resetOidcDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseMode">resetOidcResponseMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseTypes">resetOidcResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetTune">resetTune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTune` <a name="putTune" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune"></a>

```typescript
public putTune(value: IResolvable | JwtAuthBackendTune[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.putTune.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]

---

##### `resetBoundIssuer` <a name="resetBoundIssuer" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetBoundIssuer"></a>

```typescript
public resetBoundIssuer(): void
```

##### `resetDefaultRole` <a name="resetDefaultRole" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDefaultRole"></a>

```typescript
public resetDefaultRole(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetDisableRemount"></a>

```typescript
public resetDisableRemount(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJwksCaPem` <a name="resetJwksCaPem" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksCaPem"></a>

```typescript
public resetJwksCaPem(): void
```

##### `resetJwksPairs` <a name="resetJwksPairs" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksPairs"></a>

```typescript
public resetJwksPairs(): void
```

##### `resetJwksUrl` <a name="resetJwksUrl" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwksUrl"></a>

```typescript
public resetJwksUrl(): void
```

##### `resetJwtSupportedAlgs` <a name="resetJwtSupportedAlgs" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtSupportedAlgs"></a>

```typescript
public resetJwtSupportedAlgs(): void
```

##### `resetJwtValidationPubkeys` <a name="resetJwtValidationPubkeys" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetJwtValidationPubkeys"></a>

```typescript
public resetJwtValidationPubkeys(): void
```

##### `resetLocal` <a name="resetLocal" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNamespaceInState` <a name="resetNamespaceInState" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetNamespaceInState"></a>

```typescript
public resetNamespaceInState(): void
```

##### `resetOidcClientId` <a name="resetOidcClientId" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientId"></a>

```typescript
public resetOidcClientId(): void
```

##### `resetOidcClientSecret` <a name="resetOidcClientSecret" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecret"></a>

```typescript
public resetOidcClientSecret(): void
```

##### `resetOidcClientSecretWo` <a name="resetOidcClientSecretWo" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecretWo"></a>

```typescript
public resetOidcClientSecretWo(): void
```

##### `resetOidcClientSecretWoVersion` <a name="resetOidcClientSecretWoVersion" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcClientSecretWoVersion"></a>

```typescript
public resetOidcClientSecretWoVersion(): void
```

##### `resetOidcDiscoveryCaPem` <a name="resetOidcDiscoveryCaPem" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryCaPem"></a>

```typescript
public resetOidcDiscoveryCaPem(): void
```

##### `resetOidcDiscoveryUrl` <a name="resetOidcDiscoveryUrl" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcDiscoveryUrl"></a>

```typescript
public resetOidcDiscoveryUrl(): void
```

##### `resetOidcResponseMode` <a name="resetOidcResponseMode" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseMode"></a>

```typescript
public resetOidcResponseMode(): void
```

##### `resetOidcResponseTypes` <a name="resetOidcResponseTypes" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetOidcResponseTypes"></a>

```typescript
public resetOidcResponseTypes(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetTune` <a name="resetTune" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetTune"></a>

```typescript
public resetTune(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a JwtAuthBackend resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.isConstruct"></a>

```typescript
import { jwtAuthBackend } from '@cdktn/provider-vault'

jwtAuthBackend.JwtAuthBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement"></a>

```typescript
import { jwtAuthBackend } from '@cdktn/provider-vault'

jwtAuthBackend.JwtAuthBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource"></a>

```typescript
import { jwtAuthBackend } from '@cdktn/provider-vault'

jwtAuthBackend.JwtAuthBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport"></a>

```typescript
import { jwtAuthBackend } from '@cdktn/provider-vault'

jwtAuthBackend.JwtAuthBackend.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a JwtAuthBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JwtAuthBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JwtAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the JwtAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tune">tune</a></code> | <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList">JwtAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuerInput">boundIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRoleInput">defaultRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPemInput">jwksCaPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksPairsInput">jwksPairsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrlInput">jwksUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgsInput">jwtSupportedAlgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeysInput">jwtValidationPubkeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.localInput">localInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInStateInput">namespaceInStateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientIdInput">oidcClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretInput">oidcClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretWoInput">oidcClientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretWoVersionInput">oidcClientSecretWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPemInput">oidcDiscoveryCaPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrlInput">oidcDiscoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseModeInput">oidcResponseModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypesInput">oidcResponseTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfigInput">providerConfigInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tuneInput">tuneInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuer">boundIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRole">defaultRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPem">jwksCaPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksPairs">jwksPairs</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrl">jwksUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgs">jwtSupportedAlgs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeys">jwtValidationPubkeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.local">local</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInState">namespaceInState</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientId">oidcClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecret">oidcClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretWo">oidcClientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretWoVersion">oidcClientSecretWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPem">oidcDiscoveryCaPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrl">oidcDiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseMode">oidcResponseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypes">oidcResponseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfig">providerConfig</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `tune`<sup>Required</sup> <a name="tune" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tune"></a>

```typescript
public readonly tune: JwtAuthBackendTuneList;
```

- *Type:* <a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList">JwtAuthBackendTuneList</a>

---

##### `boundIssuerInput`<sup>Optional</sup> <a name="boundIssuerInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuerInput"></a>

```typescript
public readonly boundIssuerInput: string;
```

- *Type:* string

---

##### `defaultRoleInput`<sup>Optional</sup> <a name="defaultRoleInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRoleInput"></a>

```typescript
public readonly defaultRoleInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemountInput"></a>

```typescript
public readonly disableRemountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jwksCaPemInput`<sup>Optional</sup> <a name="jwksCaPemInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPemInput"></a>

```typescript
public readonly jwksCaPemInput: string;
```

- *Type:* string

---

##### `jwksPairsInput`<sup>Optional</sup> <a name="jwksPairsInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksPairsInput"></a>

```typescript
public readonly jwksPairsInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `jwksUrlInput`<sup>Optional</sup> <a name="jwksUrlInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrlInput"></a>

```typescript
public readonly jwksUrlInput: string;
```

- *Type:* string

---

##### `jwtSupportedAlgsInput`<sup>Optional</sup> <a name="jwtSupportedAlgsInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgsInput"></a>

```typescript
public readonly jwtSupportedAlgsInput: string[];
```

- *Type:* string[]

---

##### `jwtValidationPubkeysInput`<sup>Optional</sup> <a name="jwtValidationPubkeysInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeysInput"></a>

```typescript
public readonly jwtValidationPubkeysInput: string[];
```

- *Type:* string[]

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.localInput"></a>

```typescript
public readonly localInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `namespaceInStateInput`<sup>Optional</sup> <a name="namespaceInStateInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInStateInput"></a>

```typescript
public readonly namespaceInStateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `oidcClientIdInput`<sup>Optional</sup> <a name="oidcClientIdInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientIdInput"></a>

```typescript
public readonly oidcClientIdInput: string;
```

- *Type:* string

---

##### `oidcClientSecretInput`<sup>Optional</sup> <a name="oidcClientSecretInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretInput"></a>

```typescript
public readonly oidcClientSecretInput: string;
```

- *Type:* string

---

##### `oidcClientSecretWoInput`<sup>Optional</sup> <a name="oidcClientSecretWoInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretWoInput"></a>

```typescript
public readonly oidcClientSecretWoInput: string;
```

- *Type:* string

---

##### `oidcClientSecretWoVersionInput`<sup>Optional</sup> <a name="oidcClientSecretWoVersionInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretWoVersionInput"></a>

```typescript
public readonly oidcClientSecretWoVersionInput: number;
```

- *Type:* number

---

##### `oidcDiscoveryCaPemInput`<sup>Optional</sup> <a name="oidcDiscoveryCaPemInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPemInput"></a>

```typescript
public readonly oidcDiscoveryCaPemInput: string;
```

- *Type:* string

---

##### `oidcDiscoveryUrlInput`<sup>Optional</sup> <a name="oidcDiscoveryUrlInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrlInput"></a>

```typescript
public readonly oidcDiscoveryUrlInput: string;
```

- *Type:* string

---

##### `oidcResponseModeInput`<sup>Optional</sup> <a name="oidcResponseModeInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseModeInput"></a>

```typescript
public readonly oidcResponseModeInput: string;
```

- *Type:* string

---

##### `oidcResponseTypesInput`<sup>Optional</sup> <a name="oidcResponseTypesInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypesInput"></a>

```typescript
public readonly oidcResponseTypesInput: string[];
```

- *Type:* string[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tuneInput`<sup>Optional</sup> <a name="tuneInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tuneInput"></a>

```typescript
public readonly tuneInput: IResolvable | JwtAuthBackendTune[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `boundIssuer`<sup>Required</sup> <a name="boundIssuer" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.boundIssuer"></a>

```typescript
public readonly boundIssuer: string;
```

- *Type:* string

---

##### `defaultRole`<sup>Required</sup> <a name="defaultRole" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.defaultRole"></a>

```typescript
public readonly defaultRole: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jwksCaPem`<sup>Required</sup> <a name="jwksCaPem" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksCaPem"></a>

```typescript
public readonly jwksCaPem: string;
```

- *Type:* string

---

##### `jwksPairs`<sup>Required</sup> <a name="jwksPairs" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksPairs"></a>

```typescript
public readonly jwksPairs: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `jwksUrl`<sup>Required</sup> <a name="jwksUrl" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwksUrl"></a>

```typescript
public readonly jwksUrl: string;
```

- *Type:* string

---

##### `jwtSupportedAlgs`<sup>Required</sup> <a name="jwtSupportedAlgs" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtSupportedAlgs"></a>

```typescript
public readonly jwtSupportedAlgs: string[];
```

- *Type:* string[]

---

##### `jwtValidationPubkeys`<sup>Required</sup> <a name="jwtValidationPubkeys" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.jwtValidationPubkeys"></a>

```typescript
public readonly jwtValidationPubkeys: string[];
```

- *Type:* string[]

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `namespaceInState`<sup>Required</sup> <a name="namespaceInState" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.namespaceInState"></a>

```typescript
public readonly namespaceInState: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `oidcClientId`<sup>Required</sup> <a name="oidcClientId" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientId"></a>

```typescript
public readonly oidcClientId: string;
```

- *Type:* string

---

##### `oidcClientSecret`<sup>Required</sup> <a name="oidcClientSecret" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecret"></a>

```typescript
public readonly oidcClientSecret: string;
```

- *Type:* string

---

##### `oidcClientSecretWo`<sup>Required</sup> <a name="oidcClientSecretWo" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretWo"></a>

```typescript
public readonly oidcClientSecretWo: string;
```

- *Type:* string

---

##### `oidcClientSecretWoVersion`<sup>Required</sup> <a name="oidcClientSecretWoVersion" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcClientSecretWoVersion"></a>

```typescript
public readonly oidcClientSecretWoVersion: number;
```

- *Type:* number

---

##### `oidcDiscoveryCaPem`<sup>Required</sup> <a name="oidcDiscoveryCaPem" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryCaPem"></a>

```typescript
public readonly oidcDiscoveryCaPem: string;
```

- *Type:* string

---

##### `oidcDiscoveryUrl`<sup>Required</sup> <a name="oidcDiscoveryUrl" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcDiscoveryUrl"></a>

```typescript
public readonly oidcDiscoveryUrl: string;
```

- *Type:* string

---

##### `oidcResponseMode`<sup>Required</sup> <a name="oidcResponseMode" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseMode"></a>

```typescript
public readonly oidcResponseMode: string;
```

- *Type:* string

---

##### `oidcResponseTypes`<sup>Required</sup> <a name="oidcResponseTypes" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.oidcResponseTypes"></a>

```typescript
public readonly oidcResponseTypes: string[];
```

- *Type:* string[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.providerConfig"></a>

```typescript
public readonly providerConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JwtAuthBackendConfig <a name="JwtAuthBackendConfig" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.Initializer"></a>

```typescript
import { jwtAuthBackend } from '@cdktn/provider-vault'

const jwtAuthBackendConfig: jwtAuthBackend.JwtAuthBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.boundIssuer">boundIssuer</a></code> | <code>string</code> | The value against which to match the iss claim in a JWT. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.defaultRole">defaultRole</a></code> | <code>string</code> | The default role to use if none is provided during login. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.description">description</a></code> | <code>string</code> | The description of the auth backend. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksCaPem">jwksCaPem</a></code> | <code>string</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksPairs">jwksPairs</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | List of JWKS URL and optional CA certificate pairs. Cannot be used with 'jwks_url' or 'jwks_ca_pem'. Requires Vault 1.16+. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksUrl">jwksUrl</a></code> | <code>string</code> | JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtSupportedAlgs">jwtSupportedAlgs</a></code> | <code>string[]</code> | A list of supported signing algorithms. Defaults to [RS256]. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtValidationPubkeys">jwtValidationPubkeys</a></code> | <code>string[]</code> | A list of PEM-encoded public keys to use to authenticate signatures locally. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.local">local</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespaceInState">namespaceInState</a></code> | <code>boolean \| cdktn.IResolvable</code> | Pass namespace in the OIDC state parameter instead of as a separate query parameter. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientId">oidcClientId</a></code> | <code>string</code> | Client ID used for OIDC. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecret">oidcClientSecret</a></code> | <code>string</code> | Client Secret used for OIDC. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecretWo">oidcClientSecretWo</a></code> | <code>string</code> | Write-only Client Secret used for OIDC. This field is recommended over oidc_client_secret for enhanced security. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecretWoVersion">oidcClientSecretWoVersion</a></code> | <code>number</code> | Version counter for write-only oidc_client_secret field. Increment this value to force update of the secret. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryCaPem">oidcDiscoveryCaPem</a></code> | <code>string</code> | The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryUrl">oidcDiscoveryUrl</a></code> | <code>string</code> | The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseMode">oidcResponseMode</a></code> | <code>string</code> | The response mode to be used in the OAuth2 request. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseTypes">oidcResponseTypes</a></code> | <code>string[]</code> | The response types to request. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.path">path</a></code> | <code>string</code> | path to mount the backend. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.providerConfig">providerConfig</a></code> | <code>{[ key: string ]: string}</code> | Provider specific handling configuration. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.tune">tune</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.type">type</a></code> | <code>string</code> | Type of backend. Can be either 'jwt' or 'oidc'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `boundIssuer`<sup>Optional</sup> <a name="boundIssuer" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.boundIssuer"></a>

```typescript
public readonly boundIssuer: string;
```

- *Type:* string

The value against which to match the iss claim in a JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#bound_issuer JwtAuthBackend#bound_issuer}

---

##### `defaultRole`<sup>Optional</sup> <a name="defaultRole" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.defaultRole"></a>

```typescript
public readonly defaultRole: string;
```

- *Type:* string

The default role to use if none is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#default_role JwtAuthBackend#default_role}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#description JwtAuthBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#disable_remount JwtAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#id JwtAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jwksCaPem`<sup>Optional</sup> <a name="jwksCaPem" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksCaPem"></a>

```typescript
public readonly jwksCaPem: string;
```

- *Type:* string

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL.

If not set, system certificates are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#jwks_ca_pem JwtAuthBackend#jwks_ca_pem}

---

##### `jwksPairs`<sup>Optional</sup> <a name="jwksPairs" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksPairs"></a>

```typescript
public readonly jwksPairs: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

List of JWKS URL and optional CA certificate pairs. Cannot be used with 'jwks_url' or 'jwks_ca_pem'. Requires Vault 1.16+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#jwks_pairs JwtAuthBackend#jwks_pairs}

---

##### `jwksUrl`<sup>Optional</sup> <a name="jwksUrl" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwksUrl"></a>

```typescript
public readonly jwksUrl: string;
```

- *Type:* string

JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#jwks_url JwtAuthBackend#jwks_url}

---

##### `jwtSupportedAlgs`<sup>Optional</sup> <a name="jwtSupportedAlgs" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtSupportedAlgs"></a>

```typescript
public readonly jwtSupportedAlgs: string[];
```

- *Type:* string[]

A list of supported signing algorithms. Defaults to [RS256].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#jwt_supported_algs JwtAuthBackend#jwt_supported_algs}

---

##### `jwtValidationPubkeys`<sup>Optional</sup> <a name="jwtValidationPubkeys" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.jwtValidationPubkeys"></a>

```typescript
public readonly jwtValidationPubkeys: string[];
```

- *Type:* string[]

A list of PEM-encoded public keys to use to authenticate signatures locally.

Cannot be used with 'jwks_url' or 'oidc_discovery_url'. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#jwt_validation_pubkeys JwtAuthBackend#jwt_validation_pubkeys}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#local JwtAuthBackend#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#namespace JwtAuthBackend#namespace}

---

##### `namespaceInState`<sup>Optional</sup> <a name="namespaceInState" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.namespaceInState"></a>

```typescript
public readonly namespaceInState: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Pass namespace in the OIDC state parameter instead of as a separate query parameter.

With this setting, the allowed redirect URL(s) in Vault and on the provider side should not contain a namespace query parameter. This means only one redirect URL entry needs to be maintained on the OIDC provider side for all vault namespaces that will be authenticating against it. Defaults to true for new configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#namespace_in_state JwtAuthBackend#namespace_in_state}

---

##### `oidcClientId`<sup>Optional</sup> <a name="oidcClientId" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientId"></a>

```typescript
public readonly oidcClientId: string;
```

- *Type:* string

Client ID used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_client_id JwtAuthBackend#oidc_client_id}

---

##### `oidcClientSecret`<sup>Optional</sup> <a name="oidcClientSecret" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecret"></a>

```typescript
public readonly oidcClientSecret: string;
```

- *Type:* string

Client Secret used for OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_client_secret JwtAuthBackend#oidc_client_secret}

---

##### `oidcClientSecretWo`<sup>Optional</sup> <a name="oidcClientSecretWo" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecretWo"></a>

```typescript
public readonly oidcClientSecretWo: string;
```

- *Type:* string

Write-only Client Secret used for OIDC. This field is recommended over oidc_client_secret for enhanced security.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_client_secret_wo JwtAuthBackend#oidc_client_secret_wo}

---

##### `oidcClientSecretWoVersion`<sup>Optional</sup> <a name="oidcClientSecretWoVersion" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcClientSecretWoVersion"></a>

```typescript
public readonly oidcClientSecretWoVersion: number;
```

- *Type:* number

Version counter for write-only oidc_client_secret field. Increment this value to force update of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_client_secret_wo_version JwtAuthBackend#oidc_client_secret_wo_version}

---

##### `oidcDiscoveryCaPem`<sup>Optional</sup> <a name="oidcDiscoveryCaPem" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryCaPem"></a>

```typescript
public readonly oidcDiscoveryCaPem: string;
```

- *Type:* string

The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL.

If not set, system certificates are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_discovery_ca_pem JwtAuthBackend#oidc_discovery_ca_pem}

---

##### `oidcDiscoveryUrl`<sup>Optional</sup> <a name="oidcDiscoveryUrl" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcDiscoveryUrl"></a>

```typescript
public readonly oidcDiscoveryUrl: string;
```

- *Type:* string

The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or 'jwt_validation_pubkeys'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_discovery_url JwtAuthBackend#oidc_discovery_url}

---

##### `oidcResponseMode`<sup>Optional</sup> <a name="oidcResponseMode" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseMode"></a>

```typescript
public readonly oidcResponseMode: string;
```

- *Type:* string

The response mode to be used in the OAuth2 request.

Allowed values are 'query' and 'form_post'. Defaults to 'query'. If using Vault namespaces, and oidc_response_mode is 'form_post', then 'namespace_in_state' should be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_response_mode JwtAuthBackend#oidc_response_mode}

---

##### `oidcResponseTypes`<sup>Optional</sup> <a name="oidcResponseTypes" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.oidcResponseTypes"></a>

```typescript
public readonly oidcResponseTypes: string[];
```

- *Type:* string[]

The response types to request.

Allowed values are 'code' and 'id_token'. Defaults to 'code'. Note: 'id_token' may only be used if 'oidc_response_mode' is set to 'form_post'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#oidc_response_types JwtAuthBackend#oidc_response_types}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

path to mount the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#path JwtAuthBackend#path}

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Provider specific handling configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#provider_config JwtAuthBackend#provider_config}

---

##### `tune`<sup>Optional</sup> <a name="tune" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.tune"></a>

```typescript
public readonly tune: IResolvable | JwtAuthBackendTune[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#tune JwtAuthBackend#tune}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of backend. Can be either 'jwt' or 'oidc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#type JwtAuthBackend#type}

---

### JwtAuthBackendTune <a name="JwtAuthBackendTune" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.Initializer"></a>

```typescript
import { jwtAuthBackend } from '@cdktn/provider-vault'

const jwtAuthBackendTune: jwtAuthBackend.JwtAuthBackendTune = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#allowed_response_headers JwtAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#audit_non_hmac_request_keys JwtAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#audit_non_hmac_response_keys JwtAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.defaultLeaseTtl">defaultLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#default_lease_ttl JwtAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.listingVisibility">listingVisibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#listing_visibility JwtAuthBackend#listing_visibility}. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.maxLeaseTtl">maxLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#max_lease_ttl JwtAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#passthrough_request_headers JwtAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.tokenType">tokenType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#token_type JwtAuthBackend#token_type}. |

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.allowedResponseHeaders"></a>

```typescript
public readonly allowedResponseHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#allowed_response_headers JwtAuthBackend#allowed_response_headers}.

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#audit_non_hmac_request_keys JwtAuthBackend#audit_non_hmac_request_keys}.

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#audit_non_hmac_response_keys JwtAuthBackend#audit_non_hmac_response_keys}.

---

##### `defaultLeaseTtl`<sup>Optional</sup> <a name="defaultLeaseTtl" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.defaultLeaseTtl"></a>

```typescript
public readonly defaultLeaseTtl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#default_lease_ttl JwtAuthBackend#default_lease_ttl}.

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.listingVisibility"></a>

```typescript
public readonly listingVisibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#listing_visibility JwtAuthBackend#listing_visibility}.

---

##### `maxLeaseTtl`<sup>Optional</sup> <a name="maxLeaseTtl" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.maxLeaseTtl"></a>

```typescript
public readonly maxLeaseTtl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#max_lease_ttl JwtAuthBackend#max_lease_ttl}.

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.passthroughRequestHeaders"></a>

```typescript
public readonly passthroughRequestHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#passthrough_request_headers JwtAuthBackend#passthrough_request_headers}.

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/jwt_auth_backend#token_type JwtAuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### JwtAuthBackendTuneList <a name="JwtAuthBackendTuneList" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer"></a>

```typescript
import { jwtAuthBackend } from '@cdktn/provider-vault'

new jwtAuthBackend.JwtAuthBackendTuneList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get"></a>

```typescript
public get(index: number): JwtAuthBackendTuneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JwtAuthBackendTune[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>[]

---


### JwtAuthBackendTuneOutputReference <a name="JwtAuthBackendTuneOutputReference" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer"></a>

```typescript
import { jwtAuthBackend } from '@cdktn/provider-vault'

new jwtAuthBackend.JwtAuthBackendTuneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAllowedResponseHeaders">resetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetDefaultLeaseTtl">resetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetListingVisibility">resetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetMaxLeaseTtl">resetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">resetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedResponseHeaders` <a name="resetAllowedResponseHeaders" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```typescript
public resetAllowedResponseHeaders(): void
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```typescript
public resetAuditNonHmacRequestKeys(): void
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```typescript
public resetAuditNonHmacResponseKeys(): void
```

##### `resetDefaultLeaseTtl` <a name="resetDefaultLeaseTtl" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```typescript
public resetDefaultLeaseTtl(): void
```

##### `resetListingVisibility` <a name="resetListingVisibility" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetListingVisibility"></a>

```typescript
public resetListingVisibility(): void
```

##### `resetMaxLeaseTtl` <a name="resetMaxLeaseTtl" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```typescript
public resetMaxLeaseTtl(): void
```

##### `resetPassthroughRequestHeaders` <a name="resetPassthroughRequestHeaders" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```typescript
public resetPassthroughRequestHeaders(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.resetTokenType"></a>

```typescript
public resetTokenType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">allowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">defaultLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibilityInput">listingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtlInput">maxLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">passthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtl">defaultLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibility">listingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtl">maxLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedResponseHeadersInput`<sup>Optional</sup> <a name="allowedResponseHeadersInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```typescript
public readonly allowedResponseHeadersInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```typescript
public readonly auditNonHmacRequestKeysInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```typescript
public readonly auditNonHmacResponseKeysInput: string[];
```

- *Type:* string[]

---

##### `defaultLeaseTtlInput`<sup>Optional</sup> <a name="defaultLeaseTtlInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```typescript
public readonly defaultLeaseTtlInput: string;
```

- *Type:* string

---

##### `listingVisibilityInput`<sup>Optional</sup> <a name="listingVisibilityInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```typescript
public readonly listingVisibilityInput: string;
```

- *Type:* string

---

##### `maxLeaseTtlInput`<sup>Optional</sup> <a name="maxLeaseTtlInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```typescript
public readonly maxLeaseTtlInput: string;
```

- *Type:* string

---

##### `passthroughRequestHeadersInput`<sup>Optional</sup> <a name="passthroughRequestHeadersInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```typescript
public readonly passthroughRequestHeadersInput: string[];
```

- *Type:* string[]

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `allowedResponseHeaders`<sup>Required</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```typescript
public readonly allowedResponseHeaders: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

---

##### `defaultLeaseTtl`<sup>Required</sup> <a name="defaultLeaseTtl" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```typescript
public readonly defaultLeaseTtl: string;
```

- *Type:* string

---

##### `listingVisibility`<sup>Required</sup> <a name="listingVisibility" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.listingVisibility"></a>

```typescript
public readonly listingVisibility: string;
```

- *Type:* string

---

##### `maxLeaseTtl`<sup>Required</sup> <a name="maxLeaseTtl" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```typescript
public readonly maxLeaseTtl: string;
```

- *Type:* string

---

##### `passthroughRequestHeaders`<sup>Required</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```typescript
public readonly passthroughRequestHeaders: string[];
```

- *Type:* string[]

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTuneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | JwtAuthBackendTune;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.jwtAuthBackend.JwtAuthBackendTune">JwtAuthBackendTune</a>

---



