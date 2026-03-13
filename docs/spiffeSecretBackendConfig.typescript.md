# `spiffeSecretBackendConfig` Submodule <a name="`spiffeSecretBackendConfig` Submodule" id="@cdktn/provider-vault.spiffeSecretBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpiffeSecretBackendConfig <a name="SpiffeSecretBackendConfig" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config vault_spiffe_secret_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer"></a>

```typescript
import { spiffeSecretBackendConfig } from '@cdktn/provider-vault'

new spiffeSecretBackendConfig.SpiffeSecretBackendConfig(scope: Construct, id: string, config: SpiffeSecretBackendConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig">SpiffeSecretBackendConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig">SpiffeSecretBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetBundleRefreshHint">resetBundleRefreshHint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtIssuerUrl">resetJwtIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtOidcCompatibilityMode">resetJwtOidcCompatibilityMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtSigningAlgorithm">resetJwtSigningAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetKeyLifetime">resetKeyLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBundleRefreshHint` <a name="resetBundleRefreshHint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetBundleRefreshHint"></a>

```typescript
public resetBundleRefreshHint(): void
```

##### `resetJwtIssuerUrl` <a name="resetJwtIssuerUrl" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtIssuerUrl"></a>

```typescript
public resetJwtIssuerUrl(): void
```

##### `resetJwtOidcCompatibilityMode` <a name="resetJwtOidcCompatibilityMode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtOidcCompatibilityMode"></a>

```typescript
public resetJwtOidcCompatibilityMode(): void
```

##### `resetJwtSigningAlgorithm` <a name="resetJwtSigningAlgorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtSigningAlgorithm"></a>

```typescript
public resetJwtSigningAlgorithm(): void
```

##### `resetKeyLifetime` <a name="resetKeyLifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetKeyLifetime"></a>

```typescript
public resetKeyLifetime(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SpiffeSecretBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct"></a>

```typescript
import { spiffeSecretBackendConfig } from '@cdktn/provider-vault'

spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement"></a>

```typescript
import { spiffeSecretBackendConfig } from '@cdktn/provider-vault'

spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource"></a>

```typescript
import { spiffeSecretBackendConfig } from '@cdktn/provider-vault'

spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport"></a>

```typescript
import { spiffeSecretBackendConfig } from '@cdktn/provider-vault'

spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SpiffeSecretBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpiffeSecretBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpiffeSecretBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SpiffeSecretBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHintInput">bundleRefreshHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrlInput">jwtIssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityModeInput">jwtOidcCompatibilityModeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithmInput">jwtSigningAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetimeInput">keyLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomainInput">trustDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHint">bundleRefreshHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrl">jwtIssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityMode">jwtOidcCompatibilityMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithm">jwtSigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetime">keyLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomain">trustDomain</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bundleRefreshHintInput`<sup>Optional</sup> <a name="bundleRefreshHintInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHintInput"></a>

```typescript
public readonly bundleRefreshHintInput: string;
```

- *Type:* string

---

##### `jwtIssuerUrlInput`<sup>Optional</sup> <a name="jwtIssuerUrlInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrlInput"></a>

```typescript
public readonly jwtIssuerUrlInput: string;
```

- *Type:* string

---

##### `jwtOidcCompatibilityModeInput`<sup>Optional</sup> <a name="jwtOidcCompatibilityModeInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityModeInput"></a>

```typescript
public readonly jwtOidcCompatibilityModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jwtSigningAlgorithmInput`<sup>Optional</sup> <a name="jwtSigningAlgorithmInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithmInput"></a>

```typescript
public readonly jwtSigningAlgorithmInput: string;
```

- *Type:* string

---

##### `keyLifetimeInput`<sup>Optional</sup> <a name="keyLifetimeInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetimeInput"></a>

```typescript
public readonly keyLifetimeInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `trustDomainInput`<sup>Optional</sup> <a name="trustDomainInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomainInput"></a>

```typescript
public readonly trustDomainInput: string;
```

- *Type:* string

---

##### `bundleRefreshHint`<sup>Required</sup> <a name="bundleRefreshHint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHint"></a>

```typescript
public readonly bundleRefreshHint: string;
```

- *Type:* string

---

##### `jwtIssuerUrl`<sup>Required</sup> <a name="jwtIssuerUrl" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrl"></a>

```typescript
public readonly jwtIssuerUrl: string;
```

- *Type:* string

---

##### `jwtOidcCompatibilityMode`<sup>Required</sup> <a name="jwtOidcCompatibilityMode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityMode"></a>

```typescript
public readonly jwtOidcCompatibilityMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jwtSigningAlgorithm`<sup>Required</sup> <a name="jwtSigningAlgorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithm"></a>

```typescript
public readonly jwtSigningAlgorithm: string;
```

- *Type:* string

---

##### `keyLifetime`<sup>Required</sup> <a name="keyLifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetime"></a>

```typescript
public readonly keyLifetime: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `trustDomain`<sup>Required</sup> <a name="trustDomain" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomain"></a>

```typescript
public readonly trustDomain: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpiffeSecretBackendConfigConfig <a name="SpiffeSecretBackendConfigConfig" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.Initializer"></a>

```typescript
import { spiffeSecretBackendConfig } from '@cdktn/provider-vault'

const spiffeSecretBackendConfigConfig: spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the SPIFFE secrets engine in Vault. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.trustDomain">trustDomain</a></code> | <code>string</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.bundleRefreshHint">bundleRefreshHint</a></code> | <code>string</code> | Refresh hint to use in trust bundles. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtIssuerUrl">jwtIssuerUrl</a></code> | <code>string</code> | Base URL to use for JWT iss claim. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtOidcCompatibilityMode">jwtOidcCompatibilityMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtSigningAlgorithm">jwtSigningAlgorithm</a></code> | <code>string</code> | Signing algorithm to use for JWTs. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.keyLifetime">keyLifetime</a></code> | <code>string</code> | How long a signing key will live for once it starts being used to sign. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the SPIFFE secrets engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#mount SpiffeSecretBackendConfig#mount}

---

##### `trustDomain`<sup>Required</sup> <a name="trustDomain" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.trustDomain"></a>

```typescript
public readonly trustDomain: string;
```

- *Type:* string

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#trust_domain SpiffeSecretBackendConfig#trust_domain}

---

##### `bundleRefreshHint`<sup>Optional</sup> <a name="bundleRefreshHint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.bundleRefreshHint"></a>

```typescript
public readonly bundleRefreshHint: string;
```

- *Type:* string

Refresh hint to use in trust bundles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#bundle_refresh_hint SpiffeSecretBackendConfig#bundle_refresh_hint}

---

##### `jwtIssuerUrl`<sup>Optional</sup> <a name="jwtIssuerUrl" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtIssuerUrl"></a>

```typescript
public readonly jwtIssuerUrl: string;
```

- *Type:* string

Base URL to use for JWT iss claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_issuer_url SpiffeSecretBackendConfig#jwt_issuer_url}

---

##### `jwtOidcCompatibilityMode`<sup>Optional</sup> <a name="jwtOidcCompatibilityMode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtOidcCompatibilityMode"></a>

```typescript
public readonly jwtOidcCompatibilityMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_oidc_compatibility_mode SpiffeSecretBackendConfig#jwt_oidc_compatibility_mode}

---

##### `jwtSigningAlgorithm`<sup>Optional</sup> <a name="jwtSigningAlgorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtSigningAlgorithm"></a>

```typescript
public readonly jwtSigningAlgorithm: string;
```

- *Type:* string

Signing algorithm to use for JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_signing_algorithm SpiffeSecretBackendConfig#jwt_signing_algorithm}

---

##### `keyLifetime`<sup>Optional</sup> <a name="keyLifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.keyLifetime"></a>

```typescript
public readonly keyLifetime: string;
```

- *Type:* string

How long a signing key will live for once it starts being used to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#key_lifetime SpiffeSecretBackendConfig#key_lifetime}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#namespace SpiffeSecretBackendConfig#namespace}

---



